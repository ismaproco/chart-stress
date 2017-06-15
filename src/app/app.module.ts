import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BitstampService } from "app/services/bitstamp.service";
import { VirtualScrollModule } from "app/modules/virtual.scroll.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    VirtualScrollModule
  ],
  providers: [BitstampService],
  bootstrap: [AppComponent]
})
export class AppModule { }
