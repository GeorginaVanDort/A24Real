import { Component} from 'angular2/core';
import { KegListComponent } from './keg-list.component'
import { Keg } from './keg.keg'

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1>Skeleton Angular2 App!</h1>
    <keg-list [kegList]="kegs" (onKegSelect)="kegWasSelected($event)"></keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg('Victoria Bitter','Victoria Bitter', 5, 4.9, ),
      new Keg('','',,,),
      new Keg('','',,,),
      new Keg('','',,,)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("this works", clickedKeg);
  }
}
