import { PipeTransform } from '@angular/core';
import { IrowDefinition } from "../models/irow-definition.model";
export declare class FilterPipe implements PipeTransform {
    transform(list: IrowDefinition[], searchByProp: string, searchVal: string): any;
}
