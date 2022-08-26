import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Transaction } from 'src/app/interfaces/Transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction!: Transaction;
  @Output() deleteTransaction: EventEmitter<Transaction> = new EventEmitter<Transaction>();
  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;
  menuTopLeftPosition =  {x: '0', y: '0'} 

  constructor() { }

  ngOnInit(): void {
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();

    this.menuTopLeftPosition.x = event.clientX + 'px'; 
    this.menuTopLeftPosition.y = event.clientY + 'px'; 

    this.contextMenu.openMenu();
  }
  
  onDeleteTransaction() {
    this.deleteTransaction.emit(this.transaction);
  }
}
