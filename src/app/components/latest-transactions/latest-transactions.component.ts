import { Bill } from './../../interfaces/Bill';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss']
})
export class LatestTransactionsComponent implements OnInit {
  @Input() bill!: Bill;
  
  constructor() { }

  ngOnInit(): void {
  }

}
