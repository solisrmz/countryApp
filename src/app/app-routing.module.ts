import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent, 
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'ver-pais/:id',
    component: VerPaisComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
