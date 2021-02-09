import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  paises: Pais[] = [];
  error: boolean = false;
  termino: string = '';
  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.error = false;
    this.termino = termino;
    this.paisService.porCapital(this.termino).subscribe( data => {
      this.paises = data;
      console.log(this.paises);
    }, (err) => {
      this.error = true;
      this.paises = [];
    });
  }

  sugerencia(termino: string){
    this.error = false;
  }
}
