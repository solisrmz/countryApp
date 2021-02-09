import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {
  termino: string = '';
  @Output () onEnter:  EventEmitter <string> = new EventEmitter();
  @Output () onDebounce: EventEmitter <string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();
  
  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(300))
    .subscribe( valor => {
      console.log(valor)
      this.onDebounce.emit( valor )
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
    this.debouncer.subscribe
  }

  presionada( event: any){
    this.debouncer.next( this.termino );
  }
}
