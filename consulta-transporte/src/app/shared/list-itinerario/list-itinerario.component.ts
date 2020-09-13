import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-itinerario',
  templateUrl: './list-itinerario.component.html',
  styleUrls: ['./list-itinerario.component.scss'],
})
export class ListItinerarioComponent implements OnInit {
  @Input() list = [];
  constructor() {}

  ngOnInit(): void {}
}
