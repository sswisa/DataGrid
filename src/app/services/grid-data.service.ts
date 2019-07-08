import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IgridData } from "../models/igrid-data.model";

@Injectable()
export class GridDataService {

  gridData: IgridData = {
    searchBy: "employee.name.first",
    columns: [
      { entityId: "employee.id", columnOrder: 0, columnName: "Emp Id" },
      { entityId: "employee.name.first", columnOrder: 1, columnName: "First Name" },
      { entityId: "employee.name.last", columnOrder: 2, columnName: "Last Name" },
      { entityId: "employee.active", columnOrder: 3, columnName: "Active" }
    ],
    rows: [
      {
        "employee.id": "123456",
        "employee.name.first": "Keith",
        "employee.name.last": "Lasch",
        "employee.active": true
      },
      {
        "employee.id": "123457",
        "employee.name.first": "Erik",
        "employee.name.last": "Birza",
        "employee.active": true
      },
      {
        "employee.id": "123458",
        "employee.name.first": "Daniel",
        "employee.name.last": "Burket",
        "employee.active": true
      },
      {
        "employee.id": "123459",
        "employee.name.first": "Sherolyn",
        "employee.name.last": "Sinha",
        "employee.active": true
      }
    ]
  };

  constructor() { }

  getGridData (): Observable<IgridData> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.gridData);
      }, 1000);
    });
  }

}
