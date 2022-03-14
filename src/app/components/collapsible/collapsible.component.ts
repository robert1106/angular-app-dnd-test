import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {

  @Input() property: any;
  @Input() deep: any;
  @Input() data: any;
  @Input() order: any;

  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen = () => {
    this.toggle = !this.toggle;
  }

}
