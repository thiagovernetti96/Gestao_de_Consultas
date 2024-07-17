import { Component, OnInit } from '@angular/core';
import { MedicoService, Medico } from '../../services/medico.service';

@Component({
  selector: 'app-Medico-list',
  templateUrl: './medico-list.component.html',
  styleUrl: './medico-list.component.css'
})
export class MedicoListComponent implements OnInit {
  medicos: Medico[] = [];

  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {
    this.medicoService.getMedicos().subscribe(data => {
      this.medicos = data;
    });
  }

  deleteMedico(id: number): void {
    this.medicoService.deleteMedico(id).subscribe(() => {
      this.medicos = this.medicos.filter(m => m.id !== id);
    });
  }
}
