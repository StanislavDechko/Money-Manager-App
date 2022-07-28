import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Bill } from 'src/app/interfaces/Bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  @Input() bill!: Bill;
  @Output() editButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  editBill(): void {
    this.editButtonClicked.emit();
  }
}
