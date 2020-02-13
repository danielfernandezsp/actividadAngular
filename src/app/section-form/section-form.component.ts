import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*Funcion de Capturar, Almacenar datos y Limpiar campos*/
  guardar() {
    /*Captura de datos escrito en los inputs*/
    var nom = (<HTMLInputElement>document.getElementById("nombretxt")).value;
    var apel = (<HTMLInputElement>document.getElementById("apellidotxt")).value;;
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Apellido", apel);
    /*Limpiando los campos o inputs*/
    (<HTMLInputElement>document.getElementById("nombretxt")).value = "";
    (<HTMLInputElement>document.getElementById("apellidotxt")).value = "";
  }


  /*Funcion Cargar y Mostrar datos*/
  cargar() {
    /*Obtener datos almacenados*/
    var nombre = localStorage.getItem("Nombre");
    var apellido = localStorage.getItem("Apellido");
    /*Mostrar datos almacenados*/
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("apellido").innerHTML = apellido;
  }


}
