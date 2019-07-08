import { Pipe, PipeTransform } from '@angular/core';
import {IrowDefinition} from "../models/irow-definition.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: IrowDefinition[], searchByProp: string, searchVal: string): any {
    console.log(list, searchByProp, searchVal);
    if (searchVal === "") return list;
    return list.filter(item => (<string>item[searchByProp]).toLowerCase().includes(searchVal.toLowerCase()));
  }

}
