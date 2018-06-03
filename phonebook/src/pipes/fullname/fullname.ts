import { Pipe, PipeTransform } from '@angular/core';

// usage: {{ contact | fullname }}

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {

  transform(value: any) {
    if (!value) return '';

    let title = value['gender'] == 'Male' ? 'Mr.' : 'Ms.';
    let fname = value.first_name ? value.first_name : '';
    let lname = value.last_name ? value.last_name : '';
    return `${title} ${fname} ${lname}`;
  }
}
