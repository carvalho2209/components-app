import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppModule } from '../../app.module';
import { BarUnityConfig, Bar_Unity_Config } from './bar.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarComponent
  ],
  exports: [
    BarComponent
  ]
})

export class BarModule {
  static forRoot(config: BarUnityConfig): ModuleWithProviders<AppModule> {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'ConfigManual', useValue: config },
        { provide: Bar_Unity_Config, useValue: config }
      ]
    }
  }
}
