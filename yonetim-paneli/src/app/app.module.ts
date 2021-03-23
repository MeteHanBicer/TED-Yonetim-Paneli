import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YonetimPaneliComponent } from './yonetim-paneli/yonetim-paneli.component';

@NgModule({
  declarations: [
    AppComponent,
    YonetimPaneliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
