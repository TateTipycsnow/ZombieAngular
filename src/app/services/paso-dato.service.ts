import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasoDatoService {

  constructor() { }

  mensaje = '';
  _id = '';

  pasardato(id: string, name: string) {
    this._id = id;
    this.mensaje = 'Actualizando a ' + name;
  }

  agregar() {
    this.mensaje = 'Agregar zombies';
  }

  obtenerMensaje() {
    return this.mensaje;
  }
}
