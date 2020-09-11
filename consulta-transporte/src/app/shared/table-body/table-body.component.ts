import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class tableBodyComponent implements OnInit {
  @Input() list = [];
  constructor() {}

  ngOnInit() {}
}
