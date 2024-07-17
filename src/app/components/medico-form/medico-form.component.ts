import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicoService, Medico } from '../../services/medico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html'
})
export class MedicoFormComponent implements OnInit {
  medicoForm: FormGroup;
  isEditMode: boolean = false;
  medicoId: number = 0;

  constructor(
    private fb: FormBuilder,
    private medicoService:MedicoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.medicoForm = this.fb.group({
      name: ['', Validators.required],
      crm: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.medicoId = +id;
        this.medicoService.getMedico(this.medicoId).subscribe(medico => {
          this.medicoForm.patchValue(medico);
        });
      }
    });
  }

  onSubmit(): void {
    const medico: Medico = this.medicoForm.value;

    if (this.isEditMode) {
      this.medicoService.updateMedico(this.medicoId, medico).subscribe(() => {
        this.router.navigate(['/medicos']);
      });
    } else {
      this.medicoService.addMedico(medico).subscribe(() => {
        this.router.navigate(['/medicos']);
      });
    }
  }
}
