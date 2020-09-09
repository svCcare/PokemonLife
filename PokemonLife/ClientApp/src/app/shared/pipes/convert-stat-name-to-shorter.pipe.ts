import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertStatNameToShorter'
})
export class ConvertStatNameToShorterPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toLowerCase() === 'specialattack') {
      return 'Sp. Atk';
    }
    if (value.toLowerCase() === 'specialdefence') {
      return 'Sp. Def';
    }
  
    else return value;
  }
}
