import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes'; // Suponho que o arquivo de rotas já exista

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),  // Configura o HttpClient com Fetch e coalescência de eventos
    provideRouter(routes),                                    // Fornece as rotas
    provideZoneChangeDetection(),                              // Habilita a detecção de mudanças no Angular com Zone.js
  ]
};
