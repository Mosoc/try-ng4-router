import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent }   from './pages/index/index.component';
import { FirstComponent }   from './pages/first/first.component';
import { UserComponent} from './pages/user/user.component'
import { NestComponent } from './pages/nest/nest.component';
import { EggComponent } from './pages/nest/egg/egg.component';
import { BirdComponent } from './pages/nest/bird/bird.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent },
  { path: 'first',  component: FirstComponent },
  { path: 'user/:userId',  component: UserComponent },
  {
    path: 'nest',
    component: NestComponent,
    children: [
      {path: 'egg', component: EggComponent}, 
      {path: 'bird', component: BirdComponent}, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
