import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsPreviewModalComponent } from './transactions-preview-modal.component';

describe('TransactionsPreviewModalComponent', () => {
  let component: TransactionsPreviewModalComponent;
  let fixture: ComponentFixture<TransactionsPreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsPreviewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
