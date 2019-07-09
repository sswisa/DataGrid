import { IgridData } from "./models/igrid-data.model";
export declare class GridComponent {
    searchByValue: string;
    searchValModel: string;
    gridData: IgridData;
    constructor();
    search(searchVal: string): void;
}
