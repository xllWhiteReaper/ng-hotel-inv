import { InjectionToken } from '@angular/core';
import { AppConfig } from "./appconfig.interface";


export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    // apiEndpoint: 'https://myapi.com/param1=x&param2=y',
    apiEndpoint: 'https://reqres.in/api/users?page=2'
    // This is the string we can 
    // retrieve form environment import
}