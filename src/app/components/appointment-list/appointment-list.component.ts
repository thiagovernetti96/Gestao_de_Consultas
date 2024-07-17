import { Component, OnInit } from '@angular/core';
import { AppointmentService, Appointment } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  searchTerm: string = '';

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((appointments) => {
      this.appointments = appointments;
      this.filteredAppointments = appointments;
    });
  }

  filterAppointments(): void {
    if (this.searchTerm) {
      this.filteredAppointments = this.appointments.filter(app => 
        app.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredAppointments = this.appointments;
    }
  }
}

