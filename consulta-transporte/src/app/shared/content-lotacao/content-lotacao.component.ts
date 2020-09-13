import { Component, OnInit } from '@angular/core';
import { TransportesService } from 'src/app/transportes.service';

@Component({
  selector: 'app-content-lotacao',
  templateUrl: './content-lotacao.component.html',
  styleUrls: ['./content-lotacao.component.scss'],
})
export class ContentLotacaoComponent implements OnInit {
  listLotacao;

  constructor(private transportesSrevice: TransportesService) {}

  ngOnInit(): void {
    this.listarLotacao(null);
  }

  listarLotacao(busca: object) {
    if (!busca) {
      this.transportesSrevice.listarLotacao().subscribe(
        (onibus) => {
          this.listLotacao = onibus;
        },
        (err) => {
          console.log('Erro ao listar os alunos', err);
        }
      );
    } else {
      this.listLotacao = busca;
    }
  }
  filtrar(value: string) {
    let busca = [];
    if (!value || value === ' ') {
      this.listarLotacao(null);
    } else {
      busca = this.listLotacao.filter((item) =>
        item.nome.trim().toLowerCase().includes(value.trim().toLowerCase())
      );
    }
    this.listarLotacao(busca);
  }
}
