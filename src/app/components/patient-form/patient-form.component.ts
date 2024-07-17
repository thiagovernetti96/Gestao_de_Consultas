import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService, Patient } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html'
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;
  isEditMode: boolean = false;
  patientId: number = 0;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      condition: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.patientId = +id;
        this.patientService.getPatient(this.patientId).subscribe(patient => {
          this.patientForm.patchValue(patient);
        });
      }
    });
  }

  onSubmit(): void {
    const patient: Patient = this.patientForm.value;

    if (this.isEditMode) {
      this.patientService.updatePatient(this.patientId, patient).subscribe(() => {
        this.router.navigate(['/patients']);
      });
    } else {
      this.patientService.addPatient(patient).subscribe(() => {
        this.router.navigate(['/patients']);
      });
    }
  }
}