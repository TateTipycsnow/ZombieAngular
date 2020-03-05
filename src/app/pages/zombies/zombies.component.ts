import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-zombies',
  templateUrl: './zombies.component.html',
  styleUrls: ['./zombies.component.css']
})
export class ZombiesComponent implements OnInit {
  zombies: any;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.obtenerZombies()
    .subscribe((resultados) => {
      this.zombies = resultados;
    });
  }

}
