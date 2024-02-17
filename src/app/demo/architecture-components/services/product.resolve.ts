import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from "@angular/router";
import { Product } from "../Models/product";
import { ProductService } from "./product.service";

export const ProductsResolve: ResolveFn<Product[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(ProductService).getAll(route.paramMap.get('state'));
};
