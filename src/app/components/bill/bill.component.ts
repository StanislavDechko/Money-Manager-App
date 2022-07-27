import { Component, Input, OnInit } from '@angular/core';
import { Bill } from 'src/app/interfaces/Bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  @Input() bill!: Bill;
  
  constructor() { }

  ngOnInit(): void {
  }

  editBill(): void {

  }
}
