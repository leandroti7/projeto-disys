import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TransportesService } from 'src/app/transportes.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class tableBodyComponent implements OnInit {
  // @Output() showLotacao: EventEmitter<boolean> = new EventEmitter();
  @Input() list = [];
  constructor(
    private appComponent: AppComponent,
    private transporteService: TransportesService
  ) {}
  // itinerario = new ContentItinerarioComponent();
  public id;

  ngOnInit() {}
  setLocalhistorage(item) {
    window.localStorage.setItem('id', item);
  }

  mostrar(event) {
    this.id = event.target.id;
    this.setLocalhistorage(this.id);
    this.appComponent.openedItinerario(true);
    this.transporteService.listarItinerario(this.id);
  }
}
