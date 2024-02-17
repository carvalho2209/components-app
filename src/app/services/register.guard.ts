import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { RegisterComponent } from "../demo/reactiveforms/register/register.component";

@Injectable()
export class RegisterGuard implements CanDeactivate<RegisterComponent>{
  canDeactivate(component: RegisterComponent) {
    if (component.changesNotSaved) {
      return window.confirm('are you sure???');
    }

    return true;
  }
}
