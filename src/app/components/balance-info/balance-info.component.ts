import { Bill, getCurrencyFormat } from './../../interfaces/Bill';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-info',
  templateUrl: './balance-info.component.html',
  styleUrls: ['./balance-info.component.scss']
})
export class BalanceInfoComponent implements OnInit {
  @Input() bill!: Bill;

  constructor() { }

  ngOnInit(): void {
  }

  getCurrencyFormat(sum: number, currency: string) {
    return getCurrencyFormat(sum, currency);
  }
}
