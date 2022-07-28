import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillManipulationModalComponent } from './bill-manipulation-modal.component';

describe('BillManipulationModalComponent', () => {
  let component: BillManipulationModalComponent;
  let fixture: ComponentFixture<BillManipulationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillManipulationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillManipulationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
