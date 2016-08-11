import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "lessThanTenPipe",
  pure: true
})

export class LessThanTenPipe implements PipeTransform {
  transform(input: Keg[],) {
    var almostEmptyKeg: Keg[] = [];
    var pintsLeft = Keg[4];
      for (var i = 0; i < input.length; i++) {
        if (pintsLeft < 10) {
          almostEmptyKeg.push(input[i]);
        }
      }
    return almostEmptyKeg;
  }
}
