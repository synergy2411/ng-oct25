import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CoountryCodePipe implements PipeTransform {
  transform(value: number, code: string = 'IND'): unknown {
    switch (code) {
      case 'USA':
        return '+1 ' + value;
      case 'AUS':
        return '+43 ' + value;
      case 'SNG':
        return '+65 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}

// Create a pipe that will reverse the string
