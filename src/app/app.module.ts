import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstComponent }   from './pages/first/first.component';
import { IndexComponent } from './pages/index/index.component';
import { UserComponent } from './pages/user/user.component';
import { NestComponent } from './pages/nest/nest.component';
import { EggComponent } from './pages/nest/egg/egg.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    IndexComponent,
    UserComponent,
    NestComponent,
    EggComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
