import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class tableBodyComponent implements OnInit {
  // @Output() showLotacao: EventEmitter<boolean> = new EventEmitter();
  @Input() list = [];
  constructor(private appComponent: AppComponent) {}
  public id;

  ngOnInit() {}

  mostrar(event) {
    this.appComponent.openedItinerario(true);
    // console.log(event.target.id);
  }
}
