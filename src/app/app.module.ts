import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookLogComponent } from './book-log/book-log.component';
import { BookNamesComponent } from './book-names/book-names.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatFormFieldModule } from '@angular/material/form-field';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    BookLogComponent,
    BookNamesComponent,
    HomeComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
     MatButtonModule,
     MatDatepickerModule,
     MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
