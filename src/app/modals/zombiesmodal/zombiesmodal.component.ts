import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-zombiesmodal',
  templateUrl: './zombiesmodal.component.html',
  styleUrls: ['./zombiesmodal.component.css']
})
export class ZombiesmodalComponent implements OnInit {
  @ViewChild('modal') public modal: ElementRef;

  Name: string;
  Mail: string;
  Type: string;

  constructor(private DataService: DataService, private _renderer: Renderer2) { }

  ngOnInit(): void {
  }

  agregarZombie() {
    this.DataService.agregarZombie(this.Name, this.Mail, this.Type).subscribe((resultado) => {
      this._renderer.selectRootElement(this.modal.nativeElement, true).click();
      this.DataService.obtenerZombies();
    },(error) => {
      console.log(error);
    });
  }
}
