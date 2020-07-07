import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {

  transform(value: any, args?: any, args2?: any, args3?: any): any {
    return value + '  ' + args + '  ' + args2 + '  ' + args3;
  }

}
