import { BillManipulationModalComponent } from './../modals/bill-manipulation-modal/bill-manipulation-modal.component';
import { Bill, getDefaultBill } from './../../interfaces/Bill';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  now: Date = new Date();
  @Input() user!: string;
  @Input() bills!: Bill[];
  customOptions: OwlOptions = {
    stagePadding: 15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    navText: ['<span class="material-symbols-outlined">arrow_back_ios</span>', '<span class="material-symbols-outlined">arrow_forward_ios</span>'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      260: {
        items: 1
      },
      400: {
        items: 1
      },
      550: {
        items: 2
      },
      830: {
        items: 3
      },
      940: {
        items: 4
      },
      1100: {
        items: 5
      }
    },
  };
  @Input() activeBill!: Bill;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  makeActive(bill: Bill): void {
    this.bills.map(bill => bill.isActive = false);
    bill.isActive = true;
  }

  openAddBillDialog(): void {
    this.openDialog("New Bill", getDefaultBill());
  }

  openEditBillDialog(bill: Bill): void {
    this.openDialog("Edit Bill", bill);
  }

  private openDialog(title: string, bill: Bill): void {
    const dialogRef = this.dialog.open(BillManipulationModalComponent, {
      data: {
        title: title,
        submitButtonText: title == "New Bill" ? "Create" : "Edit",
        bill: bill
      }
    });
  }
}
