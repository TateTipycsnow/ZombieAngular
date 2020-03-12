import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-zombiesmodal',
  templateUrl: './zombiesmodal.component.html',
  styleUrls: ['./zombiesmodal.component.css']
})
export class ZombiesmodalComponent implements OnInit {
  Name: string;
  Mail: string;
  Type: string;

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
  }

  agregarZombie() {
    this.DataService.agregarZombie(this.Name, this.Mail, this.Type).subscribe((resultado) => {
      console.log(resultado);
    });
  }
}
