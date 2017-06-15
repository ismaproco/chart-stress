import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { VirtualScrollComponent } from "./virtual.scroll.component";

@NgModule({
  imports: [CommonModule],
  exports: [VirtualScrollComponent],
  declarations: [VirtualScrollComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VirtualScrollModule { }