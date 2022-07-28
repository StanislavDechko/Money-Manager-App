import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillUiEditFormComponent } from './bill-ui-edit-form.component';

describe('BillUiEditFormComponent', () => {
  let component: BillUiEditFormComponent;
  let fixture: ComponentFixture<BillUiEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillUiEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillUiEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
