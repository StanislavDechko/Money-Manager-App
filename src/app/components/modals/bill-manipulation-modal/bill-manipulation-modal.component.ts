import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bill } from 'src/app/interfaces/Bill';

@Component({
  selector: 'app-bill-manipulation-modal',
  templateUrl: './bill-manipulation-modal.component.html',
  styleUrls: ['./bill-manipulation-modal.component.scss']
})
export class BillManipulationModalComponent implements OnInit {
  showFirst: Boolean = true;
  @Output() deleteBill: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() editBill: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() createBill: EventEmitter<any> = new EventEmitter<any>(); 

  constructor(
    private dialogRef: MatDialogRef<BillManipulationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  }

  onNavigationButtonClicked(): void {
    this.showFirst = !this.showFirst;
  }

  close(): void {
    this.dialogRef.close();
  }

  onSubmitButtonClick(): void {
    if (this.data.title === "New Bill") {
      this.createBill.emit(this.data.bill);
    } else {
      this.editBill.emit(this.data.bill);
    }
    this.dialogRef.close();
  }

  onDeleteBill(bill: Bill) {
    this.deleteBill.emit(bill);
    this.dialogRef.close();
  }
}
