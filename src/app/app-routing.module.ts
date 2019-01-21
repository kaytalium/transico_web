import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'application', pathMatch: 'full'},
  {path: 'auth', loadChildren: './authentication/authentication.module#AuthenticationModule'},
  {path: 'application', loadChildren: './frame/frame.module#MainFrameModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
