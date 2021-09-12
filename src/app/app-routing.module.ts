import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./presentation/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'vitalSigns/:id',
    loadChildren: () => import('./presentation/pages/vital-signs-registration/vital-signs-registration-routing.module').then( m => m.VitalSignsRegistrationPageRoutingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./presentation/pages/login/login-routing.module').then( m => m.LoginPageRoutingModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
