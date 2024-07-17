import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { PatientService } from '../../services/patient.service';
import { MedicoService } from '../../services/medico.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm: FormGroup;
  appointmentId: number | null = null;
  patients: any[] = [];
  medicos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private medicoService: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.appointmentForm = this.fb.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
      patientId: ['', Validators.required],
      medicoId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    });

    this.medicoService.getMedicos().subscribe((data) => {
      this.medicos = data;
    });

    this.route.params.subscribe(params => {
      this.appointmentId = +params['id'] || null;
      if (this.appointmentId) {
        this.appointmentService.getAppointment(this.appointmentId).subscribe(appointment => {
          this.appointmentForm.patchValue(appointment);
        });
      }
    });
  }

  onSubmit() {
    if (this.appointmentForm.invalid) {
      return;
    }

    if (this.appointmentId) {
      this.appointmentService.updateAppointment(this.appointmentId, this.appointmentForm.value).subscribe(() => {
        this.router.navigate(['/appointments']);
      });
    } else {
      this.appointmentService.createAppointment(this.appointmentForm.value).subscribe(() => {
        this.router.navigate(['/appointments']);
      });
    }
  }
}

