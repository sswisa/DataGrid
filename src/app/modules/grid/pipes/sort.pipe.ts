import { Pipe, PipeTransform } from '@angular/core';
import {IcolumnDefinition} from "../models/icolumn-definition.model";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: IcolumnDefinition[], sortBy: string): IcolumnDefinition[] {
    if (sortBy === "ascending") {
      return list.sort(this.sortMethod);
    } else if (sortBy === "descending") {
      return list.sort(this.sortMethod).reverse();
    }
  }

  sortMethod = (a: IcolumnDefinition, b: IcolumnDefinition): number => {
    return a.columnOrder - b.columnOrder;
  }

}
