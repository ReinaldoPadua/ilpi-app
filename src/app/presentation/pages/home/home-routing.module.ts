import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionalizedRepository } from '../../../infrastructure/implementations/institutionalized-repository';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    InstitutionalizedRepository, // seu provider aqui
  ],
})
export class HomePageRoutingModule {}
