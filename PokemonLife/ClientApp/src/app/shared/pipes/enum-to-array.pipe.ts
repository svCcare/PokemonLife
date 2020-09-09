import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(data): Array<Foo> {
    let array:Foo[] = [];
    const keys = Object.keys(data);
    const count = Object.keys(data).length/2;
    for (let index = 0; index < count; index++) {
      const element:Foo = {id:index, value:data[index]};
      array.push(element)
    }

    return array;
  }

}

interface Foo {
  id:number,
  value:string
}
