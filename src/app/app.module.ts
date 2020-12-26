import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './common/sidemenu/sidemenu.component';
import { HeaderComponent } from './common/header/header.component';




// import { DashboardModule } from "./dashboard/dashboard.module";



@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
