import { __decorate, __metadata } from 'tslib';
import { Input, Component, Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.searchByValue = "";
        this.searchValModel = "";
    }
    GridComponent.prototype.search = function (searchVal) {
        this.searchByValue = searchVal;
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
    return GridComponent;
}());

var SortPipe = /** @class */ (function () {
    function SortPipe() {
        this.sortMethod = function (a, b) {
            return a.columnOrder - b.columnOrder;
        };
    }
    SortPipe.prototype.transform = function (list, sortBy) {
        if (sortBy === "ascending") {
            return list.sort(this.sortMethod);
        }
        else if (sortBy === "descending") {
            return list.sort(this.sortMethod).reverse();
        }
    };
    SortPipe = __decorate([
        Pipe({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, searchByProp, searchVal) {
        if (searchVal === "" || searchVal === undefined)
            return list;
        return list.filter(function (item) { return item[searchByProp].toLowerCase().includes(searchVal.toLowerCase()); });
    };
    FilterPipe = __decorate([
        Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());

var GridModule = /** @class */ (function () {
    function GridModule() {
    }
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
    return GridModule;
}());

export { GridModule, GridComponent as ɵa, SortPipe as ɵb, FilterPipe as ɵc };
//# sourceMappingURL=sswisa-grid.js.map
