import { PipeTransform } from '@angular/core';
import { IcolumnDefinition } from "../models/icolumn-definition.model";
export declare class SortPipe implements PipeTransform {
    transform(list: IcolumnDefinition[], sortBy: string): IcolumnDefinition[];
    sortMethod: (a: IcolumnDefinition, b: IcolumnDefinition) => number;
}
