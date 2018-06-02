import { Pipe, PipeTransform } from '@angular/core';

// usage: {{ contact | fullname }}

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {

  transform(value: any) {
    if (!value) return '';

    let title = value['gender'] == 'Male' ? 'Mr.' : 'Ms.';
    return `${title} ${value.first_name} ${value['last_name']}`;
  }
}
