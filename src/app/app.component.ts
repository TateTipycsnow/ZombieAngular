import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  nombre = 'Jared';

  sabor = '';
  precio = 0;
  descripcion = '';
  imagen = '';

  cerebros = [
    {
      sabor: 'vainilla',
      precio: 100,
      descripcion: 'con chispas de chocolate',
      imagen: 'vainilla.jpg'
    },
    {
      sabor: 'chocolate',
      precio: 300,
      descripcion: 'con crema',
      imagen: 'chocolate.jpg'
    },
    {
      sabor: 'uva',
      precio: 400,
      descripcion: 'con frambuesas',
      imagen: 'uva.jpg'
    },
    {
      sabor: 'naranja',
      precio: 200,
      descripcion: 'con tajin',
      imagen: 'naranja.jpg'
    }
  ];

  Crear() {
    let cerebro = {
      sabor: this.sabor,
      precio: this.precio,
      descripcion: this.descripcion,
      imagen: this.imagen
    };

    this.cerebros.push(cerebro);
  }

  Borrar(sabor: string) {
    this.cerebros = this.cerebros.filter(item => item.sabor !== sabor);
  }

  Actualizar(sabor: string, precio: number, descripcion: string, imagen: string) {
    this.cerebros.find(item => item.sabor === sabor).precio = this.precio;
    this.cerebros.find(item => item.sabor === sabor).descripcion = this.descripcion;
    this.cerebros.find(item => item.sabor === sabor).imagen = this.imagen;
  }
}
