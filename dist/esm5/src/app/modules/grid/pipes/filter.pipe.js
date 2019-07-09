import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, searchByProp, searchVal) {
        if (searchVal === "" || searchVal === undefined)
            return list;
        return list.filter(function (item) { return item[searchByProp].toLowerCase().includes(searchVal.toLowerCase()); });
    };
    FilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3N3aXNhL2dyaWQvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvZ3JpZC9waXBlcy9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQ7SUFBQTtJQU9BLENBQUM7SUFMQyw4QkFBUyxHQUFULFVBQVUsSUFBc0IsRUFBRSxZQUFvQixFQUFFLFNBQWlCO1FBQ3ZFLElBQUksU0FBUyxLQUFLLEVBQUUsSUFBSSxTQUFTLEtBQUssU0FBUztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzdELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFTLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQTVFLENBQTRFLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBTFUsVUFBVTtRQUh0QixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7T0FDVyxVQUFVLENBT3RCO0lBQUQsaUJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJcm93RGVmaW5pdGlvbn0gZnJvbSBcIi4uL21vZGVscy9pcm93LWRlZmluaXRpb24ubW9kZWxcIjtcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGxpc3Q6IElyb3dEZWZpbml0aW9uW10sIHNlYXJjaEJ5UHJvcDogc3RyaW5nLCBzZWFyY2hWYWw6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHNlYXJjaFZhbCA9PT0gXCJcIiB8fCBzZWFyY2hWYWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGxpc3Q7XG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGl0ZW0gPT4gKDxzdHJpbmc+aXRlbVtzZWFyY2hCeVByb3BdKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbC50b0xvd2VyQ2FzZSgpKSk7XG4gIH1cblxufVxuIl19