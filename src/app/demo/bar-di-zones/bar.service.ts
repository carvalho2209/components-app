import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Injector, inject } from '@angular/core';
import { BarUnityConfig, Bar_Unity_Config } from './bar.config';

export function BarFactory(http: HttpClient, inject: Injector) {
  return new BarServices(http, inject.get(Bar_Unity_Config));
}

@Injectable()
export class BarServices {

  constructor(
    private http: HttpClient,
    @Inject(Bar_Unity_Config) private config: BarUnityConfig
  ) { }

  getDrinks(): string {
    return 'Drinks';
  }

  getAppetizers(): string {
    return 'appetizers';
  }

  getFood(): string {
    return 'Food';
  }

  public getUnities(): string {
    return 'Unity Id: ' + this.config.unityId + ' token: ' + this.config.unityToken;
  }

}

export abstract class DrinkService {
  getDrinks: () => string
}
