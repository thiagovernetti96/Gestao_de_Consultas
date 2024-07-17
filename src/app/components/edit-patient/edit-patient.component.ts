import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patientForm: FormGroup;
  patientId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      condition: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.patientId = +params['id'] || null;
      if (this.patientId) {
        this.patientService.getPatient(this.patientId).subscribe(patient => {
          this.patientForm.patchValue(patient);
        });
      }
    });
  }

  onSubmit() {
    if (this.patientForm.invalid) {
      return;
    }

    if (this.patientId) {
      this.patientService.updatePatient(this.patientId, this.patientForm.value).subscribe(() => {
        this.router.navigate(['/patients']);
      });
    }
  }
}
