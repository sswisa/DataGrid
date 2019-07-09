import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let GridComponent = class GridComponent {
    constructor() {
        this.searchByValue = "";
        this.searchValModel = "";
    }
    search(searchVal) {
        this.searchByValue = searchVal;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], GridComponent.prototype, "gridData", void 0);
GridComponent = tslib_1.__decorate([
    Component({
        selector: 'app-grid',
        templateUrl: './grid.component.html',
        styleUrls: ['./grid.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GridComponent);
export { GridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3N3aXNhL2dyaWQvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRakQsSUFBYSxhQUFhLEdBQTFCO0lBTUU7UUFKQSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUdKLENBQUM7SUFFakIsTUFBTSxDQUFDLFNBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7Q0FFRixDQUFBO0FBUlU7SUFBUixLQUFLLEVBQUU7OytDQUFvQjtBQUpqQixhQUFhO0lBTHpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDckMsQ0FBQzs7R0FDVyxhQUFhLENBWXpCO1NBWlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElncmlkRGF0YSB9IGZyb20gXCIuL21vZGVscy9pZ3JpZC1kYXRhLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudHtcblxuICBzZWFyY2hCeVZhbHVlID0gXCJcIjtcbiAgc2VhcmNoVmFsTW9kZWwgPSBcIlwiO1xuICBASW5wdXQoKSBncmlkRGF0YTogSWdyaWREYXRhXG5cbiAgY29uc3RydWN0b3IgKCkge31cblxuICBzZWFyY2goc2VhcmNoVmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaEJ5VmFsdWUgPSBzZWFyY2hWYWw7XG4gIH1cblxufVxuIl19