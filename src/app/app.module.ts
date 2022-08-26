import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ColorPickerModule } from 'ngx-color-picker';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BillComponent } from './components/bill/bill.component';
import { BalanceInfoComponent } from './components/balance-info/balance-info.component';
import { BillEditFormComponent } from './components/shared/bill-edit-form/bill-edit-form.component';
import { BillUiEditFormComponent } from './components/shared/bill-ui-edit-form/bill-ui-edit-form.component';
import { BillManipulationModalComponent } from './components/modals/bill-manipulation-modal/bill-manipulation-modal.component';
import { AccessTokenInterceptor } from './services/helpers/AccessTokenInterceptor';
import { LatestTransactionsComponent } from './components/latest-transactions/latest-transactions.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { AddTransactionModalComponent } from './components/modals/add-transaction-modal/add-transaction-modal.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { TransactionsPreviewModalComponent } from './components/modals/transactions-preview-modal/transactions-preview-modal.component';
import { NotificationComponent } from './components/shared/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    DashboardComponent,
    BillComponent,
    BalanceInfoComponent,
    BillManipulationModalComponent,
    BillEditFormComponent,
    BillUiEditFormComponent,
    BillManipulationModalComponent,
    LatestTransactionsComponent,
    StatisticsComponent,
    TransactionComponent,
    AddTransactionModalComponent,
    DragAndDropDirective,
    TransactionsPreviewModalComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    DragDropModule,
    MatSnackBarModule,
    NgxChartsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true,
    },
    NotificationComponent, 
    { provide: MAT_SNACK_BAR_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
