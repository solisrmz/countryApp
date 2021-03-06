import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './components/input/input.component';
import { TablaComponent } from './components/tabla/tabla.component'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent, InputComponent, TablaComponent],
  imports: [
    HttpClientModule,
    CommonModule, 
    FormsModule,
    RouterModule
  ],
  exports: [PorCapitalComponent, PorRegionComponent, PorCapitalComponent, VerPaisComponent]
})
export class PaisModule { }
