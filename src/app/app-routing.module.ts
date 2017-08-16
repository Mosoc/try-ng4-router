import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent }   from './pages/index/index.component';
import { FirstComponent }   from './pages/first/first.component';
import { UserComponent} from './pages/user/user.component'

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent },
  { path: 'first',  component: FirstComponent },
  { path: 'user/:userId',  component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
