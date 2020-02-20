import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './../peliculas.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor( private _servicio: PeliculasService ) { }

  ngOnInit() {    

  }

}
