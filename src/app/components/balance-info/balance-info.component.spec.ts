import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceInfoComponent } from './balance-info.component';

describe('BalanceInfoComponent', () => {
  let component: BalanceInfoComponent;
  let fixture: ComponentFixture<BalanceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
