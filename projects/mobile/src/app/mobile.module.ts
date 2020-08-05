import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';

@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    BrowserModule,
    MobileRoutingModule
  ],
  providers: [],
  bootstrap: [MobileComponent]
})
export class MobileModule { }
