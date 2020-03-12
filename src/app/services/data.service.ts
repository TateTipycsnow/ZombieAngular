import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

let apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _client: HttpClient) { }

  obtenerZombies() {
    return this._client.get(apiUrl + 'zombies');
  }

  agregarZombie(Nombre: string, Email: string, Tipo: string) {
    let nuevoZombie = {
      Name: Nombre,
      Mail: Email,
      Type: Tipo
    };
    return this._client.post(apiUrl + 'zombies/new', nuevoZombie);
  }

  obtenerCerebros() {
    return this._client.get(apiUrl + 'cerebros');
  }
}
