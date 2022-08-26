import { Component, EventEmitter, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BillService } from 'src/app/services/bill.service';
import { NotificationComponent } from '../../shared/notification/notification.component';


@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.scss'],
})
export class AddTransactionModalComponent implements OnInit {
  form!: FormGroup;
  files: any[] = [];
  showPreview = new EventEmitter();
  updateBill = new EventEmitter();;
  
  constructor(
    private dialogRef: MatDialogRef<AddTransactionModalComponent>,
    private billsService: BillService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notification: NotificationComponent) { }

  ngOnInit(): void {    
    this.form = new FormGroup({
      description: new FormControl("", [ Validators.required ]),
      currency: new FormControl("", [ Validators.required ]),
      sum: new FormControl("", [ Validators.required ]),
      date: new FormControl("", [ Validators.required ]),
      isIncome: new FormControl("", [ Validators.required ]),
      category: new FormControl("", [ Validators.required ])
    });
  }

  onFileDropped($event: any) {
    this.files.push($event[0]);
  }

  browseFiles() {
    const fileInput = document.getElementById("fileDropRef") as HTMLInputElement;
    fileInput?.click();
  }

  fileBrowseHandler(event: any) {
    const fileInput = event.target as HTMLInputElement;
    this.files.push(fileInput.files![0]);
  }

  getFileName(fileName: string): string {
    return fileName.length > 28 ? `${fileName.substring(0,25)}...` : fileName;
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  onShowPreview(file: any) {
    this.showPreview.emit(file);
  }

  close() {
    this.dialogRef.close();
  }

  createTransaction() {
    this.billsService.addTransaction(this.data.id, { 
      description: this.form.get("description")?.value,
      sum: this.form.get("sum")?.value,
      isIncome: this.form.get("isIncome")?.value === "true",
      date: this.form.get("date")?.value,
      currency: this.form.get("currency")?.value,
      category: this.form.get("category")?.value
    }).subscribe(response => {
      this.updateBill.emit(response);
      this.dialogRef.close();
      this.notification.notify("Transaction Added Successfully!");
    });
  }
}
