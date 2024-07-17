import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import {EditPatientComponent} from'./components/edit-patient/edit-patient.component' ;
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { MedicoFormComponent } from './components/medico-form/medico-form.component';
import { MedicoDetailComponent } from './components/medico-detail/medico-detail.component';
import { EditMedicoComponent } from './components/edit-medico/edit-medico.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { AuthGuard } from './services/authguard.service';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'patients', component: PatientListComponent, canActivate: [AuthGuard] },
  { path: 'patients/new', component: PatientFormComponent, canActivate: [AuthGuard] },
  { path: 'patients/:id', component: PatientDetailComponent, canActivate: [AuthGuard] },
  { path: 'patients/edit/:id', component: EditPatientComponent, canActivate: [AuthGuard] },
  { path: 'medicos', component: MedicoListComponent, canActivate: [AuthGuard] },
  { path: 'medicos/new', component: MedicoFormComponent, canActivate: [AuthGuard] },
  { path: 'medicos/:id', component: MedicoDetailComponent, canActivate: [AuthGuard] },
  { path: 'medicos/edit/:id', component: EditMedicoComponent, canActivate: [AuthGuard] },
  { path: 'appointments', component: AppointmentListComponent, canActivate: [AuthGuard] },
  { path: 'appointments/new', component: AppointmentFormComponent, canActivate: [AuthGuard] },
  { path: 'appointments/:id', component: AppointmentDetailComponent, canActivate: [AuthGuard] },
  { path: 'appointments/edit/:id', component: EditAppointmentComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
