import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IgridData } from "./models/igrid-data.model";
import { GridDataService } from "./services/grid-data.service";
import { Pipe } from "@angular/core";

@Pipe({
  name: 'sort'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gridData$: Observable<IgridData>;
  searchByValue = "";

  constructor (private gridDataService: GridDataService) {}

  ngOnInit () {
    this.gridData$ = this.gridDataService.getGridData();
  }

  search(searchVal: string) {
    this.searchByValue = searchVal;
  }

}
