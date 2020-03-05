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

  obtenerCerebros() {
    return this._client.get(apiUrl + 'cerebros');
  }
}
