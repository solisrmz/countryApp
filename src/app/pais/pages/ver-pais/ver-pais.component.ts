import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute ,private paisService: PaisesService) { }

  ngOnInit(): void {
    this.verPais();
  }

  verPais(){
    this.activatedRoute.params.subscribe( ({id}) => {
      this.paisService.verPais(id).subscribe( data => {
        console.log(data);
      });
    });
  }

}
