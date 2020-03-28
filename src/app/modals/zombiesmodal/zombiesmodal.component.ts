import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PasoDatoService } from '../../services/paso-dato.service';

@Component({
  selector: 'app-zombiesmodal',
  templateUrl: './zombiesmodal.component.html',
  styleUrls: ['./zombiesmodal.component.css']
})
export class ZombiesmodalComponent implements OnInit {
  @ViewChild('modalZombie') public modal: ElementRef;

  _id = '';
  Name = '';
  Mail = '';
  Type = '';
  mensaje = '';

  constructor(private DataService: DataService, private _renderer: Renderer2, private dato: PasoDatoService) { }

  ngOnInit(): void {
    this.mensaje = this.dato.mensaje;
  }

  opcionZombie() {
    if (this.dato._id) {
      this.DataService.editarZombie(this.dato._id, this.Name, this.Mail, this.Type).subscribe((resultado) => {
        console.log(resultado);
        this._renderer.selectRootElement(this.modal.nativeElement, true).click();
        this.DataService.obtenerZombies();
      }, (error) => {
        console.log(error);
      });
    }
    else {
      this.DataService.agregarZombie(this.Name, this.Mail, this.Type).subscribe(() => {
        this._renderer.selectRootElement(this.modal.nativeElement, true).click();
        this.DataService.obtenerZombies();
      }, (error) => {
        console.log(error);
      });
    }
    // Reestablece Los datos
    this._id = '';
    this.Name = '';
    this.Mail = '';
    this.Type = '';
  }
}
