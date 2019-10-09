import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myCustomDate'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const myDate: Date = new Date(value);
    if (args === 'yyyy' || args === 'YYYY') {
      return myDate.getFullYear();
    }
    if (args === 'date') {
      return new Date().toDateString();
    }
  }
}
