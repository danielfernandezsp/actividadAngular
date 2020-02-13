import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-if',
  templateUrl: './section-if.component.html',
  styleUrls: ['./section-if.component.css']
})
export class SectionIfComponent implements OnInit {

  ocultar: boolean = true;
  nBoton: string = 'Ocultar';

  constructor() { }

  boton() {
    if (this.ocultar == false) {
      this.nBoton = 'Mostrar';
    } else {
      this.nBoton = 'Ocultar';
    }
  }

  ngOnInit() {
  }

}
