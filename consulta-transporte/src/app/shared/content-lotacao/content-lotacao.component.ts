import { Component, OnInit } from '@angular/core';
import { TransportesService } from 'src/app/transportes.service';

@Component({
  selector: 'app-content-lotacao',
  templateUrl: './content-lotacao.component.html',
  styleUrls: ['./content-lotacao.component.scss'],
})
export class ContentLotacaoComponent implements OnInit {
  listLotacao;

  constructor(private traansportesSrevice: TransportesService) {}

  ngOnInit(): void {
    this.listarLotacao();
  }

  listarLotacao() {
    this.traansportesSrevice.listarLotacao().subscribe(
      (lotacao) => {
        this.listLotacao = lotacao;
      },
      (err) => {
        console.log('Erro ao listar as lotacoes', err);
      }
    );
  }
}
