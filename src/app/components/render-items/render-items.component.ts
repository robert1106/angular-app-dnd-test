import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-render-items',
  template: '<ul *ngFor="let e of data">{{e.name}}</ul>'
})
export class RenderItemsComponent {

  @Input() data: any;

}
