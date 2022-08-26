import { Bill } from './../../interfaces/Bill';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTransactionModalComponent } from '../modals/add-transaction-modal/add-transaction-modal.component';
import { Transaction } from 'src/app/interfaces/Transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { NotificationComponent } from '../shared/notification/notification.component';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss']
})
export class LatestTransactionsComponent implements OnInit {
  @Input() bill!: Bill;
  @Output() billChange = new EventEmitter<Bill>();
  showPreview: boolean = false;
  file: any;
  
  constructor(private dialog: MatDialog,
    private transactionService: TransactionService,
    private notification: NotificationComponent) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTransactionModalComponent, {
      data: this.bill,
      panelClass: "add-transaction"
    });
    const subscribeDialog = dialogRef.componentInstance.showPreview.subscribe((file) => {
      this.onShowPreview();
      this.file = file;
    });
    const updateBill = dialogRef.componentInstance.updateBill.subscribe((bill) => {
      this.billChange.emit(bill);
    });
  }

  onShowPreview() {
    this.showPreview = !this.showPreview;
  }

  onAllTransactionsDeleted() {
    this.showPreview = false;
  }

  onDeleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction( transaction).subscribe(response => {
      this.billChange.emit(response);
      this.notification.notify("Deleted Successfully!")
    });
  }

  onBillChange(bill: Bill) {
    this.billChange.emit(bill);
  }
}
