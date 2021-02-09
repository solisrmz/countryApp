import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `
    .flag{
      width: 100px;
      heigth: 60px;
    }
    `
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Pais
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisesService, 
    ) { }

  ngOnInit(): void {
    this.verPais();
  }

  verPais(){
    this.activatedRoute.params
      .pipe( switchMap ((params) => this.paisService.verPais(params.id)),
      tap( console.log ))
      .subscribe(resp => {
        this.pais = resp;
    });
  }

}
