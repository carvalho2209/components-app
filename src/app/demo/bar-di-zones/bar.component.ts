import { Component, Inject, OnInit } from "@angular/core";
import { BarServices } from './bar.service';
import { BarUnityConfig, Bar_Unity_Config } from "./bar.config";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    {
      provide: BarServices, useClass: BarServices
    }
  ]
})

export class BarComponent implements OnInit {

  ConfigManual: BarUnityConfig;
  Config: BarUnityConfig;
  barBebida: string;

  constructor(private barServices: BarServices,
    @Inject('ConfigManual') private ApiConfigManual: BarUnityConfig,
    @Inject(Bar_Unity_Config) private ApiConfig: BarUnityConfig) { }

  ngOnInit(): void {
    this.barBebida = this.barServices.getDrinks();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;
  }

}
