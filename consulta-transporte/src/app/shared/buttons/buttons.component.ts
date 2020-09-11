import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input() title: string;
  @Input() id_btn: string;

  @Output() showOnibus: EventEmitter<boolean> = new EventEmitter();
  @Output() showLotacao: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  mostrar() {
    this.showOnibus.emit(true);
    this.showLotacao.emit(true);
  }
}
