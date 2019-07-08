import { Pipe, PipeTransform } from '@angular/core';
import {IcolumnDefinition} from "../models/icolumn-definition.model";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: IcolumnDefinition[], sortBy: string): any {
    console.log(list, sortBy);
    if (sortBy === "ascending") {
      return list.sort(this.sortMethod);
    } else if (sortBy === "descending") {
      return list.sort(this.sortMethod).reverse();
    }
  }

  sortMethod = (a: IcolumnDefinition, b: IcolumnDefinition): any => {
    return a.columnOrder - b.columnOrder;
  }

}
