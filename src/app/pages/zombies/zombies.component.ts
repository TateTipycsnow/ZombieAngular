import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PasoDatoService } from 'src/app/services/paso-dato.service';

@Component({
  selector: 'app-zombies',
  templateUrl: './zombies.component.html',
  styleUrls: ['./zombies.component.css']
})
export class ZombiesComponent implements OnInit {
  zombies: any;
  constructor(private _dataService: DataService, private dato: PasoDatoService) { }

  ngOnInit(): void {
    console.log('Actualizando tabla...');
    this.actualizarTabla();
  }

  actualizarTabla() {
    this._dataService.zombiesObservable.subscribe((resultados) => {
      this.zombies = resultados;
    });

    this._dataService.obtenerZombies();
  }

  async eliminarZombie(id: string) {
    await this._dataService.eliminarZombie(id).subscribe((resultado) => {
      console.log(resultado);
      this.actualizarTabla();
    });
  }

  pasarDatos(id: string, name: string) {
    this.dato.pasardato(id, name);
  }

  agregar() {
    this.dato.agregar();
  }
}
