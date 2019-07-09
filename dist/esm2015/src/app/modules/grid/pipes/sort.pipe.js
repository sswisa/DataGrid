import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
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
SortPipe = tslib_1.__decorate([
    Pipe({
        name: 'sort'
    })
], SortPipe);
export { SortPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNzd2lzYS9ncmlkLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2dyaWQvcGlwZXMvc29ydC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRCxJQUFhLFFBQVEsR0FBckI7SUFIQTtRQWFFLGVBQVUsR0FBRyxDQUFDLENBQW9CLEVBQUUsQ0FBb0IsRUFBVSxFQUFFO1lBQ2xFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQTtJQUVILENBQUM7SUFaQyxTQUFTLENBQUMsSUFBeUIsRUFBRSxNQUFjO1FBQ2pELElBQUksTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25DO2FBQU0sSUFBSSxNQUFNLEtBQUssWUFBWSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDO0NBTUYsQ0FBQTtBQWRZLFFBQVE7SUFIcEIsSUFBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLE1BQU07S0FDYixDQUFDO0dBQ1csUUFBUSxDQWNwQjtTQWRZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ljb2x1bW5EZWZpbml0aW9ufSBmcm9tIFwiLi4vbW9kZWxzL2ljb2x1bW4tZGVmaW5pdGlvbi5tb2RlbFwiO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzb3J0J1xufSlcbmV4cG9ydCBjbGFzcyBTb3J0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShsaXN0OiBJY29sdW1uRGVmaW5pdGlvbltdLCBzb3J0Qnk6IHN0cmluZyk6IEljb2x1bW5EZWZpbml0aW9uW10ge1xuICAgIGlmIChzb3J0QnkgPT09IFwiYXNjZW5kaW5nXCIpIHtcbiAgICAgIHJldHVybiBsaXN0LnNvcnQodGhpcy5zb3J0TWV0aG9kKTtcbiAgICB9IGVsc2UgaWYgKHNvcnRCeSA9PT0gXCJkZXNjZW5kaW5nXCIpIHtcbiAgICAgIHJldHVybiBsaXN0LnNvcnQodGhpcy5zb3J0TWV0aG9kKS5yZXZlcnNlKCk7XG4gICAgfVxuICB9XG5cbiAgc29ydE1ldGhvZCA9IChhOiBJY29sdW1uRGVmaW5pdGlvbiwgYjogSWNvbHVtbkRlZmluaXRpb24pOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBhLmNvbHVtbk9yZGVyIC0gYi5jb2x1bW5PcmRlcjtcbiAgfVxuXG59XG4iXX0=