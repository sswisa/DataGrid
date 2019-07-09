import { Component, Input } from '@angular/core';
import { IgridData } from "./models/igrid-data.model";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent{

  searchByValue = "";
  searchValModel = "";
  @Input() gridData: IgridData

  constructor () {}

  search(searchVal: string) {
    this.searchByValue = searchVal;
  }

}
