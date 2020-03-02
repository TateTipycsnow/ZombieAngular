import { SettingsService } from '../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) {
  }

  CambiarColor(colorEncabezado: string, colorMenuLateral) {
    this._ajustes.ajustes.temaEncabezado = colorEncabezado;
    this._ajustes.ajustes.temaMenuLateral = colorMenuLateral;

    this._ajustes.guardarAjustes();
  }

  ngOnInit(): void {
    this._ajustes.cargarAjustes();
  }

  seleccionar(event) {
    console.log(event.target.dataset.class);
    this.CambiarColor(event.target.dataset.class, 'bg-primary sidebar-text-light');
  }

}
