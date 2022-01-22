import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preview'
})
export class PreviewPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const preview = value.split('\n\n')
    return preview[0]
  }

}
