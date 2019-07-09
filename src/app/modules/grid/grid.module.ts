import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {GridComponent} from './grid.component';
// import {GridService} from "./services/grid.service";
import {SortPipe} from "./pipes/sort.pipe";
import {FilterPipe} from "./pipes/filter.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GridComponent,
    SortPipe,
    FilterPipe
  ],
  exports: [GridComponent]
  // providers: [GridService]
})
export class GridModule {
}
