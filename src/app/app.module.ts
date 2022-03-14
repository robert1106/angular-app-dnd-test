import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxSortableModule} from "ngx-sortable";

import { AppComponent } from './app.component';
import { CollapsibleContainerComponent } from './components/collapsible-container/collapsible-container.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { RenderItemsComponent } from './components/render-items/render-items.component';
import { RenderNextLevelComponent } from './components/render-next-level/render-next-level.component';


@NgModule({
  declarations: [
    AppComponent,
    CollapsibleContainerComponent,
    CollapsibleComponent,
    RenderItemsComponent,
    RenderNextLevelComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSortableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
