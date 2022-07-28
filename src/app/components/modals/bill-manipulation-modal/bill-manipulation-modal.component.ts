import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bill } from 'src/app/interfaces/Bill';

@Component({
  selector: 'app-bill-manipulation-modal',
  templateUrl: './bill-manipulation-modal.component.html',
  styleUrls: ['./bill-manipulation-modal.component.scss']
})
export class BillManipulationModalComponent implements OnInit {
  bill: Bill = {
    isActive: false,
    name: "<name>",
    ui: {
      backgroundColor: "#F3F3F3",
      textColor: "#9c9c9c",
      border: "2px dashed #9c9c9c"
    },
    balance: {
      cashAmount: "0",
      currency: "$",
    }
  };
  showFirst: Boolean = true;

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
}
