import { __decorate, __metadata } from 'tslib';
import { Input, Component, Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let GridComponent = class GridComponent {
    constructor() {
        this.searchByValue = "";
        this.searchValModel = "";
    }
    search(searchVal) {
        this.searchByValue = searchVal;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], GridComponent.prototype, "gridData", void 0);
GridComponent = __decorate([
    Component({
        selector: 'app-grid',
        templateUrl: './grid.component.html',
        styleUrls: ['./grid.component.scss']
    }),
    __metadata("design:paramtypes", [])
], GridComponent);

let SortPipe = class SortPipe {
    constructor() {
        this.sortMethod = (a, b) => {
            return a.columnOrder - b.columnOrder;
        };
    }
    transform(list, sortBy) {
        if (sortBy === "ascending") {
            return list.sort(this.sortMethod);
        }
        else if (sortBy === "descending") {
            return list.sort(this.sortMethod).reverse();
        }
    }
};
SortPipe = __decorate([
    Pipe({
        name: 'sort'
    })
], SortPipe);

let FilterPipe = class FilterPipe {
    transform(list, searchByProp, searchVal) {
        if (searchVal === "" || searchVal === undefined)
            return list;
        return list.filter(item => item[searchByProp].toLowerCase().includes(searchVal.toLowerCase()));
    }
};
FilterPipe = __decorate([
    Pipe({
        name: 'filter'
    })
], FilterPipe);

let GridModule = class GridModule {
};
GridModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ],
        declarations: [
            GridComponent,
            SortPipe,
            FilterPipe
        ],
        exports: [GridComponent]
        // providers: [GridService]
    })
], GridModule);

export { GridModule, GridComponent as ɵa, SortPipe as ɵb, FilterPipe as ɵc };
//# sourceMappingURL=sswisa-grid.js.map
