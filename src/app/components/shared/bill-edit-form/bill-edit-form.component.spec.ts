import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillEditFormComponent } from './bill-edit-form.component';

describe('BillEditFormComponent', () => {
  let component: BillEditFormComponent;
  let fixture: ComponentFixture<BillEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
