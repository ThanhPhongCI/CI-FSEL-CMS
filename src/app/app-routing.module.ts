import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppGuard } from './utils/guards/app.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
      // canActivate: [AppGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
