import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Date'
})
export class DatePipe implements PipeTransform {

  transform(date: Date): number {
    return -1;
  }

}
