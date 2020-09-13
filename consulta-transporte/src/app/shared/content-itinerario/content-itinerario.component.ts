import { Component, Input, OnInit } from '@angular/core';
import { TransportesService } from 'src/app/transportes.service';

@Component({
  selector: 'app-content-itinerario',
  templateUrl: './content-itinerario.component.html',
  styleUrls: ['./content-itinerario.component.scss'],
})
export class ContentItinerarioComponent implements OnInit {
  listItinerario;
  id;

  constructor(private traansportesSrevice: TransportesService) {}
  getId() {
    let idLocalhistorage = window.localStorage.getItem('id');
    this.id = parseInt(idLocalhistorage);
  }

  ngOnInit(): void {
    this.getId();
    this.listarItinerario(this.id);
  }
  objToArray(obj) {
    let result = [];
    let newArr = [];
    for (let key of Object.keys(obj)) {
      result.push([obj[key]]);
    }
    for (let i = 0; i < result.length; i++) {
      const el = result[i];
      for (let c = 0; c < el.length; c++) {
        let element = el[c];
        newArr.push(element);
      }
    }
    return newArr;
  }

  listarItinerario(id) {
    let change;
    this.traansportesSrevice.listarItinerario(id).subscribe(
      (lotacao) => {
        change = lotacao;
        this.listItinerario = this.objToArray(change);
      },
      (err) => {
        console.log('Erro ao listar as lotacoes', err);
      }
    );
  }
}
