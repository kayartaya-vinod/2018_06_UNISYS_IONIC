import { Pipe, PipeTransform } from '@angular/core';


// usage: *ngFor="let c of contacts | filter: keyword"

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, keyword: string) {
    if (!keyword) return value;

    return value.filter(c => this.keywordExists(c, keyword));
  }

  keywordExists(c, keyword) {
    let re = new RegExp(keyword, 'i');
    for (let key in c) {
      if (re.test(c[key])) {
        return true;
      }
    }
    return false;
  }
}