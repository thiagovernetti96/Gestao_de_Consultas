import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { MedicoFormComponent } from './components/medico-form/medico-form.component';
import { MedicoDetailComponent } from './components/medico-detail/medico-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/authguard.service';
import { AuthService } from './services/authservice.service';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientService } from './services/patient.service';
import { MedicoService } from './services/medico.service';
import { AppointmentService } from './services/appointment.service';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { EditMedicoComponent } from './components/edit-medico/edit-medico.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientFormComponent,
    PatientDetailComponent,
    MedicoListComponent,
    MedicoFormComponent,
    MedicoDetailComponent,
    LoginComponent,
    AppointmentListComponent,
    AppointmentDetailComponent,
    AppointmentFormComponent,
    DashboardComponent,
    EditPatientComponent,
    EditMedicoComponent,
    EditAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:  [AuthService, AuthGuard, PatientService, MedicoService, AppointmentService],
  bootstrap: [AppComponent,PatientListComponent,
    PatientFormComponent,
    PatientDetailComponent,
    MedicoListComponent,
    MedicoFormComponent,
    MedicoDetailComponent,
    LoginComponent,
    AppointmentListComponent,
    AppointmentDetailComponent,
    AppointmentFormComponent,
    DashboardComponent,
    EditPatientComponent,
    EditMedicoComponent,
    EditAppointmentComponent]
})
export class AppModule { }
