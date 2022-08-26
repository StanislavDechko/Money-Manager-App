import { BillManipulationModalComponent } from './../modals/bill-manipulation-modal/bill-manipulation-modal.component';
import { Bill, getDefaultBill } from './../../interfaces/Bill';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { BillService } from 'src/app/services/bill.service';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../shared/notification/notification.component';

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
  @Output() activeBillChange: EventEmitter<Bill> = new EventEmitter<Bill>();

  constructor(
    private dialog: MatDialog, 
    private billsService: BillService, 
    private notification: NotificationComponent) { }

  ngOnInit(): void {
  }

  makeActive(bill: Bill): void {
    this.bills.map(bill => bill.isActive = false);
    bill.isActive = true;
    this.activeBill = bill;
    this.billsService.editBill(bill).subscribe();
    this.activeBillChange.emit(bill);
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
      },
      panelClass: "add-bill" 
    });
    const createBill = dialogRef.componentInstance.createBill.subscribe((bill) => {
      this.billsService.createBill(bill).subscribe(response => {
        this.bills = response.bills;
        this.notification.notify("Created Successfully!");
      });
    });
    const edit = dialogRef.componentInstance.editBill.subscribe((bill) => {
      this.billsService.editBill(bill).subscribe(response => {
        this.activeBill = response;
        this.notification.notify("Updated Successfully!");
      });
    });
    const deleteBill = dialogRef.componentInstance.deleteBill.subscribe((bill) => {
      this.billsService.deleteBill(bill).subscribe(reponse => {
        this.bills = reponse.bills;
        this.notification.notify("Deleted Successfully!");
      });
    });
  }

}
