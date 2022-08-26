import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from 'src/app/interfaces/Bill';

@Component({
  selector: 'app-bill-edit-form',
  templateUrl: './bill-edit-form.component.html',
  styleUrls: ['./bill-edit-form.component.scss']
})
export class BillEditFormComponent implements OnInit {
  form!: FormGroup;
  @Input() bill!: Bill;
  @Output() navigationButtonClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", [ Validators.required ]),
      currency: new FormControl("", [ Validators.required ]),
      initialBalance: new FormControl(""),
    });
  }
  
  onNavigationButtonClicked() {
    this.navigationButtonClicked.emit();
  }
}
