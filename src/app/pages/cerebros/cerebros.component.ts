import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cerebros',
  templateUrl: './cerebros.component.html',
  styleUrls: ['./cerebros.component.css']
})
export class CerebrosComponent implements OnInit {
  cerebros: any;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.obtenerCerebros()
    .subscribe((resultados) => {
      this.cerebros = resultados;
    });
  }

}
