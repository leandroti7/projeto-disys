import { Component, OnInit } from '@angular/core';
import { TransportesService } from 'src/app/transportes.service';

@Component({
  selector: 'app-content-onibus',
  templateUrl: './content-onibus.component.html',
  styleUrls: ['./content-onibus.component.scss'],
})
export class ContentOnibusComponent implements OnInit {
  listOnibus;
  constructor(private transportesService: TransportesService) {}

  ngOnInit(): void {
    this.listarOnibus(null);
  }

  listarOnibus(busca: object) {
    if (!busca) {
      this.transportesService.listarOnibus().subscribe(
        (onibus) => {
          this.listOnibus = onibus;
        },
        (err) => {
          console.log('Erro ao listar os alunos', err);
        }
      );
    } else {
      this.listOnibus = busca;
    }
  }
  filtrar(value: string) {
    let busca = [];
    if (!value || value === ' ') {
      this.listarOnibus(null);
    } else {
      busca = this.listOnibus.filter((item) =>
        item.nome.trim().toLowerCase().includes(value.trim().toLowerCase())
      );
    }
    this.listarOnibus(busca);
  }
}
