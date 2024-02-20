import { InjectionToken } from "@angular/core"

export interface BarUnityConfig {
  unityId: number,
  unityToken: string
}

export const Bar_Unity_Config = new InjectionToken<BarUnityConfig>('Bar_Unity_Config');
