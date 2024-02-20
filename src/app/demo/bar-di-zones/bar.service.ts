import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BarServices {

  constructor(private http: HttpClient) { }

  getDrinks(): string {
    return 'Drinks';
  }

  getAppetizers(): string {
    return 'appetizers';
  }

  getFood(): string {
    return 'Food';
  }
}
