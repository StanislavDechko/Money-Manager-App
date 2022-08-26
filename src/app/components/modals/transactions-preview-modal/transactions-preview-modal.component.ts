import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bill } from 'src/app/interfaces/Bill';
import { Transaction } from 'src/app/interfaces/Transaction';
import { BillService } from 'src/app/services/bill.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { NotificationComponent } from '../../shared/notification/notification.component';

@Component({
  selector: 'app-transactions-preview-modal',
  templateUrl: './transactions-preview-modal.component.html',
  styleUrls: ['./transactions-preview-modal.component.scss']
})
export class TransactionsPreviewModalComponent implements OnInit {
  loading: boolean = true;
  transactions: Transaction[] = [];
  @Input() file: any;
  @Input() activeBill!: Bill; 
  @Output() activeBillChange = new EventEmitter<Bill>();
  @Output() allTransactionsDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private transactionService: TransactionService,
    private billsService: BillService,
    private notification: NotificationComponent) { }

  ngOnInit(): void {
    this.transactionService.getTransactions(this.file).subscribe(response => {
      this.loading = false;
      this.transactions = response;
    })
  }

  deleteTransaction(index: number) {
    this.transactions.splice(index, 1);
    if (this.transactions.length == 0) {
      close();
    }
  }

  addTransactions(): void {
    this.billsService.addTransactions(this.activeBill.id, this.transactions).subscribe(response => {
      this.activeBillChange.emit(response);
      this.notification.notify("Transactions Added Successfully!");
      this.close();
    });
  }

  close(): void {
    this.allTransactionsDeleted.emit();
  }
}
