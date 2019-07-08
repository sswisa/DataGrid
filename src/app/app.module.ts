import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GridDataService } from "./services/grid-data.service";
import { AppComponent } from './app.component';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    GridDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
