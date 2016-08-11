import { Component, EventEmitter} from 'angular2/core';
import { KegComponent } from './keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent} from './new-keg.component';
import { Keg} from './keg.keg';
import { LessThanTenPipe } from './less-than-ten.pipe';

// directives populate the template with their own selector/template
@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [LessThanTenPipe],
  template:`
  <keg-display *ngFor="#currentKeg of kegList | lessThanTenPipe:selectedPipe"
  (click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg"
  [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedPipe: string = "";
  public selectedKeg: Keg;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(description: string): void {
    this.kegList.push(
      new Keg(description, this.kegList.length)
    );
  }
  onChange(optionFromUnknown) {
    this.selectedPipe = optionFromUnknown;
    console.log(this.selectedPipe);
  }
}
