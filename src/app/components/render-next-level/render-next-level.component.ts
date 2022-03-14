import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-render-next-level',
  template:
    '<app-collapsible-container [data]="data" [deep]="deep" [order]="order"></app-collapsible-container>'
})
export class RenderNextLevelComponent implements OnChanges {

  @Input() data: any;
  @Input() deep: any;
  @Input() order: any;
  @Input() property: any;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.data);
    console.log(this.deep);
    this.data = this.data.filter((o: any) => o[this.order[this.deep]].includes(this.property));
    this.deep += 1;
    console.log(this.data);
  }

}
