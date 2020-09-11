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
    this.listarOnibus();
  }

  listarOnibus() {
    this.transportesService.listarOnibus().subscribe(
      (onibus) => {
        this.listOnibus = onibus;
      },
      (err) => {
        console.log('Erro ao listar os alunos', err);
      }
    );
  }
}
