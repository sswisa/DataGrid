(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@sswisa/grid', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = global || self, factory((global.sswisa = global.sswisa || {}, global.sswisa.grid = {}), global.ng.core, global.ng.common, global.ng.forms));
}(this, function (exports, core, common, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var GridComponent = /** @class */ (function () {
        function GridComponent() {
            this.searchByValue = "";
            this.searchValModel = "";
        }
        GridComponent.prototype.search = function (searchVal) {
            this.searchByValue = searchVal;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], GridComponent.prototype, "gridData", void 0);
        GridComponent = __decorate([
            core.Component({
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
            core.Pipe({
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
            core.Pipe({
                name: 'filter'
            })
        ], FilterPipe);
        return FilterPipe;
    }());

    var GridModule = /** @class */ (function () {
        function GridModule() {
        }
        GridModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule
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

    exports.GridModule = GridModule;
    exports.ɵa = GridComponent;
    exports.ɵb = SortPipe;
    exports.ɵc = FilterPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sswisa-grid.umd.js.map
