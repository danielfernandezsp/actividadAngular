import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {

  constructor() { }

  validaNombre() {
    var nombre: string = (<HTMLInputElement>document.getElementById('nombre')).value;
    const regNombre = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]){2,16}$/;

    if (!regNombre.test(nombre)) {
      document.getElementById('nombre').focus();
      document.getElementById('nombre-error').style.display ="inline-block";
      document.getElementById('nombre-error').style.color = "red";
      document.getElementById('nombre-error').innerHTML = "Nombre incorrecto";
    }else {
      document.getElementById('nombre-error').style.display ="none";
    }
  }

  validaApellidos() {
    var apellidos: string = (<HTMLInputElement>document.getElementById('apellidos')).value;
    const regApellidos = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s-])?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+$/;
  
    if (!regApellidos.test(apellidos)) {
      document.getElementById('apellidos').focus();
      document.getElementById('apellidos-error').style.display ="inline-block";
      document.getElementById('apellidos-error').style.color = "red";
      document.getElementById('apellidos-error').innerHTML = "Apellidos incorrecto";
    } else {
      document.getElementById('apellidos-error').style.display ="none";
  
    }
  }

  validaNIF() {
    var nif: string = (<HTMLInputElement>document.getElementById('dni')).value;
    const regNIF = /^[0-9]{8}(\-)[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/;
  
    if (!regNIF.test(nif)) {
      document.getElementById('dni').focus();
      document.getElementById('dni-error').style.display ="inline-block";
      document.getElementById('dni-error').style.color = "red";
      document.getElementById('dni-error').innerHTML = "DNI incorrecto";
    } else {
      document.getElementById('dni-error').style.display ="none";
    }
  }

  validaEmail() {
    var email: string = (<HTMLInputElement>document.getElementById('email')).value;
    const regEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,4}$/;
  
    if (!regEmail.test(email)) {
      document.getElementById('email').focus();
      document.getElementById('email-error').style.display ="inline-block";
      document.getElementById('email-error').style.color = "red";
      document.getElementById('email-error').innerHTML = "Email incorrecto";
    } else {
      document.getElementById('email-error').style.display ="none";
    }
  }

  validaContrasenia() {
    var contrasenia: string = (<HTMLInputElement>document.getElementById('contraseña')).value;
    const regContrasenia = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    
    if (!regContrasenia.test(contrasenia)) {
      document.getElementById('contraseña').focus();
      document.getElementById('contraseña-error').style.display ="inline-block";
      document.getElementById('contraseña-error').style.color = "red";
      document.getElementById('contraseña-error').innerHTML = "Contraseña incorrecta";
    } else {
      document.getElementById('contraseña-error').style.display ="none";
    }

  }

  ngOnInit() {
  }
}
