import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-for',
  templateUrl: './section-for.component.html',
  styleUrls: ['./section-for.component.css']
})
export class SectionForComponent implements OnInit {

   // Array de tipo string
   cursos: string[] = ['HTML5', 'CSS3', 'SASS', 'Java8'];

   // Array de objetos animales
   animales: Array<any> = [
     { especie: 'perro', nombre: 'Lucia', anios: 8, pelo: 'corto' },
     { especie: 'gato', nombre: 'Felix', anios: 3, pelo: 'corto' },
     { especie: 'gato', nombre: 'Lulu', anios: 5, pelo: 'largo' },
     { especie: 'perro', nombre: 'Pipo', anios: 7, pelo: 'largo' }
   ];
 

  constructor() { }

  ngOnInit() {
  }

}
