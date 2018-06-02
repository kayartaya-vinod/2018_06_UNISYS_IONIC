import { Pipe, PipeTransform } from '@angular/core';

// usage: {{ contact.dob | age }} --> 27 years
// usage: {{ contact.dob | age: 1 }} --> 27 years
// usage: {{ contact.dob | age: 2 }} --> 27 years and 2 months
// usage: {{ contact.dob | age: 3 }} --> 27 years 2 months and 5 days

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {

  transform(dob: string, flag: number = 1) {
    if (!dob) return '';

    let diff = Date.now() - new Date(dob).getTime();
    let dt = new Date(diff);

    let y = dt.getFullYear() - 1970,
      m = dt.getMonth(),
      d = dt.getDate();

    switch(flag) {
      case 3: return `${y} years ${m} months and ${d} days`;
      case 2: return `${y} years and ${m} months`;
      default: return `${y} years`;
    }
  }
}
