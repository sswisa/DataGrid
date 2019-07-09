import { IcolumnDefinition } from "./icolumn-definition.model";
import { IrowDefinition } from "./irow-definition.model";
export interface IgridData {
    searchBy: string;
    columns: IcolumnDefinition[];
    rows: IrowDefinition[];
}
