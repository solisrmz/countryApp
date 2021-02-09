import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service'

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent implements OnInit {
  paises: Pais[] = [];
  sugeridos: Pais[] = [];
  error: boolean = false;
  termino: string = '';
  constructor(private paisService: PaisesService, private router: Router) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.error = false;
    this.termino = termino;
    this.paisService.porNombre(this.termino).subscribe( data => {
      this.paises = data;
      console.log(this.paises);
    }, (err) => {
      this.paises = [];
      this.error = true;
    });
  }

  sugerencia(termino: string){
    this.error = false;
    this.paisService.porNombre(termino).subscribe( data => this.sugeridos = data.splice(0,3), 
      (err) => {
        this.sugeridos = [];
      }
    );
  }
}
