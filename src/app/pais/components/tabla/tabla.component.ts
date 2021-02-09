import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
    `
    .img-flag{
      width: 60px;
      heigth: 40px;
    }
    
    `
  ]
})
export class TablaComponent implements OnInit {
  
  @Input() paises: Pais[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verPais(alphaCode: string){
    this.router.navigate(['/ver-pais',alphaCode]);
  }

}
