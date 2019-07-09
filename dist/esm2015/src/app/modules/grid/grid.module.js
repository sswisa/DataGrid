import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid.component';
// import {GridService} from "./services/grid.service";
import { SortPipe } from "./pipes/sort.pipe";
import { FilterPipe } from "./pipes/filter.pipe";
let GridModule = class GridModule {
};
GridModule = tslib_1.__decorate([
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
export { GridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3N3aXNhL2dyaWQvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvZ3JpZC9ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyx1REFBdUQ7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQWdCL0MsSUFBYSxVQUFVLEdBQXZCO0NBQ0MsQ0FBQTtBQURZLFVBQVU7SUFkdEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDWixhQUFhO1lBQ2IsUUFBUTtZQUNSLFVBQVU7U0FDWDtRQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN4QiwyQkFBMkI7S0FDNUIsQ0FBQztHQUNXLFVBQVUsQ0FDdEI7U0FEWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtHcmlkQ29tcG9uZW50fSBmcm9tICcuL2dyaWQuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7R3JpZFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xuaW1wb3J0IHtTb3J0UGlwZX0gZnJvbSBcIi4vcGlwZXMvc29ydC5waXBlXCI7XG5pbXBvcnQge0ZpbHRlclBpcGV9IGZyb20gXCIuL3BpcGVzL2ZpbHRlci5waXBlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHcmlkQ29tcG9uZW50LFxuICAgIFNvcnRQaXBlLFxuICAgIEZpbHRlclBpcGVcbiAgXSxcbiAgZXhwb3J0czogW0dyaWRDb21wb25lbnRdXG4gIC8vIHByb3ZpZGVyczogW0dyaWRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTW9kdWxlIHtcbn1cbiJdfQ==