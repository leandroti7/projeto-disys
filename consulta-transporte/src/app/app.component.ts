import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'consulta-transporte';

  showOnibus: boolean = false;
  showLotacao: boolean = false;
  showItinerario: boolean = false;

  openedOnibus(state: boolean) {
    this.showOnibus = state;
    this.showLotacao = false;
    this.showItinerario = false;
  }
  openedLotacao(state: boolean) {
    this.showLotacao = state;
    this.showOnibus = false;
    this.showItinerario = false;
  }
  openedItinerario(state: boolean) {
    this.showItinerario = state;
    this.showOnibus = false;
    this.showLotacao = false;
  }
}
