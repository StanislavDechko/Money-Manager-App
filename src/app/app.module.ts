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
import { ColorPickerModule } from 'ngx-color-picker';

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
import { StatisticsComponent } from './components/statistics/statistics.component';

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
    StatisticsComponent
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
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
