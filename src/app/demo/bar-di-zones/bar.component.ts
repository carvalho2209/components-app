import { Component, Inject, Injector, OnInit } from "@angular/core";
import { BarFactory, BarServices } from './bar.service';
import { BarUnityConfig, Bar_Unity_Config } from './bar.config';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarServices, useClass: BarServices },
    { provide: BarServices, useFactory: BarFactory, deps: [HttpClient, Injector] },

  ]
})

export class BarComponent implements OnInit {

  ConfigManual: BarUnityConfig;
  Config: BarUnityConfig;
  barBebida: string;
  dataUnities: string;

  constructor(private barServices: BarServices,
    @Inject('ConfigManual') private ApiConfigManual: BarUnityConfig,
    @Inject(Bar_Unity_Config) private ApiConfig: BarUnityConfig) { }

  ngOnInit(): void {
    this.barBebida = this.barServices.getDrinks();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;

    this.dataUnities = this.barServices.getUnities();
  }

}
