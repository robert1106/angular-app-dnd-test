import {Component, Input, DoCheck} from '@angular/core';

@Component({
  selector: 'app-collapsible-container',
  templateUrl: './collapsible-container.component.html',
  styleUrls: ['./collapsible-container.component.css']
})
export class CollapsibleContainerComponent implements DoCheck {
  @Input() order: any;
  @Input() data: any;
  @Input() deep: any;

  constructor() {}

  uniqProperties: any;

  ngDoCheck(): void {
    this.uniqProperties = [...new Set(this.data.map((o: any) => o[`${this.order[this.deep]}`]))];
  }
}
