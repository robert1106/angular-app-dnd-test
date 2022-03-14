import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private http: HttpClient,
  ) {}

  order = ['color', 'mood', 'size', 'shape', 'material'];
  data: [] = [];

  ngOnInit() {
    this.http.get('https://gist.githubusercontent.com/CJRoman/53790acd766cd2820da6bbf884235cec/raw/5e392796d26c956c2585c1a29a1d4ead1487fb63/items.json')
      .subscribe((res: any) => {
        this.data = res;
      });
  }

  orderUpperCase(value: string): string {
    return value[0].toUpperCase()+value.slice(1)
  }

}
