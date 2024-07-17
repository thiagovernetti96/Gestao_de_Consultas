import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicoService, Medico } from '../../services/medico.service';

@Component({
  selector: 'app-medico-detail',
  templateUrl: './medico-detail.component.html',
  styleUrl: './medico-detail.component.css'
})
export class MedicoDetailComponent implements OnInit {
  medico: Medico | undefined;

  constructor(
    private medicoService: MedicoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.medicoService.getMedico(id).subscribe(data => {
      this.medico = data;
    });
  }
}