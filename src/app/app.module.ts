import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {GridModule} from "./modules/grid/grid.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    GridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
