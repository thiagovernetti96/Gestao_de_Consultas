import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-edit-medico',
  templateUrl: './edit-medico.component.html',
  styleUrls: ['./edit-medico.component.css']
})
export class EditMedicoComponent implements OnInit {
  medicoForm: FormGroup;
  medicoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private medicoService: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.medicoForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.medicoId = +params['id'] || null;
      if (this.medicoId) {
        this.medicoService.getMedico(this.medicoId).subscribe(medico => {
          this.medicoForm.patchValue(medico);
        });
      }
    });
  }

  onSubmit() {
    if (this.medicoForm.invalid) {
      return;
    }

    if (this.medicoId) {
      this.medicoService.updateMedico(this.medicoId, this.medicoForm.value).subscribe(() => {
        this.router.navigate(['/medicos']);
      });
    }
  }
}
