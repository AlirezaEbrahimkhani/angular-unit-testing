import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceUnderline',
})
export class ReplaceUnderlinePipe implements PipeTransform {
  transform(value: unknown): unknown {
    if (this.isNullOrUndefined(value)) return '_';
    else return value;
  }

  isNullOrUndefined(value: any): boolean {
    if (value === null || value === undefined) return true;
    else return false;
  }
}
