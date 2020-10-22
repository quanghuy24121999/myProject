import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() subTotal: number;
  @Input() total: number;

  constructor() { }

  ngOnInit(): void {
  }

}
