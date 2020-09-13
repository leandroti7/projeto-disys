import { Component, OnInit } from '@angular/core';
import { TransportesService } from 'src/app/transportes.service';

@Component({
  selector: 'app-content-itinerario',
  templateUrl: './content-itinerario.component.html',
  styleUrls: ['./content-itinerario.component.scss'],
})
export class ContentItinerarioComponent implements OnInit {
  listItinerario;

  constructor(private traansportesSrevice: TransportesService) {}

  ngOnInit(): void {
    this.listarItinerario();
  }

  listarItinerario() {
    this.traansportesSrevice.listarItinerario().subscribe(
      (lotacao) => {
        this.listItinerario = lotacao;
        console.log(this.listItinerario);
      },
      (err) => {
        console.log('Erro ao listar as lotacoes', err);
      }
    );
  }
}
