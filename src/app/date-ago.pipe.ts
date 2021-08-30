import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var secondsAgo =  +todayWithNoTime - +new Date(value)
    var daysAgo = Math.floor((secondsAgo/3600000)/24)
    return daysAgo + " days ago"
  }

}
