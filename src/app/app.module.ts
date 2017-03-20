import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { AdvcComponent } from './advc/advc.component';
import { BestCalendarEverComponent } from './best-calendar-ever/best-calendar-ever.component';
import { CalendarChipComponent } from './calendar-chip/calendar-chip.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    Form2Component,
    AdvcComponent,
    BestCalendarEverComponent,
    CalendarChipComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
