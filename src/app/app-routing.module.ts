import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
