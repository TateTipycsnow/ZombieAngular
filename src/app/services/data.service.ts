import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

let apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private updateZombies$ = new Subject<any>();
  zombiesObservable = this.updateZombies$.asObservable();

  constructor(private _client: HttpClient) { }

  async obtenerZombies() {
    let zombies = await this._client.get<any>(apiUrl + 'zombies');
    return this.updateZombies$.next(zombies);
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
