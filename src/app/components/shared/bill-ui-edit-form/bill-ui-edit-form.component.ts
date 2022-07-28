import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from 'src/app/interfaces/Bill';

@Component({
  selector: 'app-bill-ui-edit-form',
  templateUrl: './bill-ui-edit-form.component.html',
  styleUrls: ['./bill-ui-edit-form.component.scss']
})
export class BillUiEditFormComponent implements OnInit {
  form!: FormGroup;
  @Input() bill!: Bill;
  @Output() navigationButtonClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      backgroundColor: new FormControl("", [ Validators.required ]),
      textColor: new FormControl("", [ Validators.required ]),
      border: new FormControl(""),
    });
  }
  
  onNavigationButtonClicked() {
    console.log(1);
    
    this.navigationButtonClicked.emit();
  }
}
