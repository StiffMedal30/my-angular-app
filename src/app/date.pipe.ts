import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myCustomDate'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let myDate : Date = new Date(value);
    return myDate.getFullYear();
  }



}
