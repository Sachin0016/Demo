import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuNavComponent } from './Layout/sidemenu-nav/sidemenu-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DpDatePickerModule } from 'ng2-date-picker';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // DpDatePickerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
