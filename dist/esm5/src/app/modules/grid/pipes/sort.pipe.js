import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
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
    SortPipe = tslib_1.__decorate([
        Pipe({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());
export { SortPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNzd2lzYS9ncmlkLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2dyaWQvcGlwZXMvc29ydC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRDtJQUhBO1FBYUUsZUFBVSxHQUFHLFVBQUMsQ0FBb0IsRUFBRSxDQUFvQjtZQUN0RCxPQUFPLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUN2QyxDQUFDLENBQUE7SUFFSCxDQUFDO0lBWkMsNEJBQVMsR0FBVCxVQUFVLElBQXlCLEVBQUUsTUFBYztRQUNqRCxJQUFJLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuQzthQUFNLElBQUksTUFBTSxLQUFLLFlBQVksRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQVJVLFFBQVE7UUFIcEIsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDO09BQ1csUUFBUSxDQWNwQjtJQUFELGVBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJY29sdW1uRGVmaW5pdGlvbn0gZnJvbSBcIi4uL21vZGVscy9pY29sdW1uLWRlZmluaXRpb24ubW9kZWxcIjtcblxuQFBpcGUoe1xuICBuYW1lOiAnc29ydCdcbn0pXG5leHBvcnQgY2xhc3MgU29ydFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0obGlzdDogSWNvbHVtbkRlZmluaXRpb25bXSwgc29ydEJ5OiBzdHJpbmcpOiBJY29sdW1uRGVmaW5pdGlvbltdIHtcbiAgICBpZiAoc29ydEJ5ID09PSBcImFzY2VuZGluZ1wiKSB7XG4gICAgICByZXR1cm4gbGlzdC5zb3J0KHRoaXMuc29ydE1ldGhvZCk7XG4gICAgfSBlbHNlIGlmIChzb3J0QnkgPT09IFwiZGVzY2VuZGluZ1wiKSB7XG4gICAgICByZXR1cm4gbGlzdC5zb3J0KHRoaXMuc29ydE1ldGhvZCkucmV2ZXJzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNvcnRNZXRob2QgPSAoYTogSWNvbHVtbkRlZmluaXRpb24sIGI6IEljb2x1bW5EZWZpbml0aW9uKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gYS5jb2x1bW5PcmRlciAtIGIuY29sdW1uT3JkZXI7XG4gIH1cblxufVxuIl19