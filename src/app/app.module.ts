import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstComponent }   from './pages/first/first.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
