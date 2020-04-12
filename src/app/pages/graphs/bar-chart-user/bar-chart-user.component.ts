import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-bar-chart-user',
  templateUrl: './bar-chart-user.component.html',
  styleUrls: ['./bar-chart-user.component.css']
})
export class BarChartUserComponent implements OnInit {info: any;

  Dubalin = 0;
  Minecraft = 0;
  Electrico = 0;
  Humano = 0;
  Repollo = 0;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
      align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Dubalin', 'Minecraft', 'Electrico', 'Humano', 'Repollo'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    {data: [1, 1, 1, 1, 1], backgroundColor: 'rgba(153, 102, 255, 2)', borderColor: 'rgba(153, 102, 255, 2)', label: ''}
  ];

  constructor(private dataService: DataService) {
    console.log(1);
    this.cargar();
  }

  ngOnInit(): void {
    console.log(2);
  }

  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  async cargar() {

    await this.dataService.countByFlavorUser('Dubalin', this.dataService.User).subscribe((resultado) => {
      this.info = resultado;
      this.Dubalin = this.info;
      console.log(this.Dubalin);
    });

    await this.dataService.countByFlavorUser('Minecraft', this.dataService.User).subscribe((resultado) => {
      this.info = resultado;
      this.Minecraft = this.info;
      console.log(this.Minecraft);
    });

    await this.dataService.countByFlavorUser('Electrico', this.dataService.User).subscribe((resultado) => {
      this.info = resultado;
      this.Electrico = this.info;
      console.log(this.Electrico);
    });

    await this.dataService.countByFlavorUser('Humano', this.dataService.User).subscribe((resultado) => {
      this.info = resultado;
      this.Humano = this.info;
      console.log(this.Humano);
    });

    await this.dataService.countByFlavorUser('Repollo', this.dataService.User).subscribe((resultado) => {
      this.info = resultado;
      this.Repollo = this.info;
      console.log(this.Repollo);
    });
  }

  actualizar() {
    const data = [
      this.Dubalin,
      this.Minecraft,
      this.Electrico,
      this.Humano,
      this.Repollo
    ];
    this.barChartData[0].data = data;
  }
}
