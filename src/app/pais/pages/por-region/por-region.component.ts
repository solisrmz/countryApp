import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-rigth: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europa', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];
  mostrarTabla: boolean = false;
  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }

  cargarPais(region: string){
    this.regionActiva = region;
    this.paisService.porRegion(region).subscribe( data => {
      this.paises = data;
      this.mostrarTabla = true;
    });
  }
}
