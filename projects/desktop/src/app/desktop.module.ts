import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DesktopRoutingModule } from './desktop-routing.module';
import { DesktopComponent } from './desktop.component';

@NgModule({
  declarations: [
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    DesktopRoutingModule
  ],
  providers: [],
  bootstrap: [DesktopComponent]
})
export class DesktopModule { }
