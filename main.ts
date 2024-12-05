import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideZoneChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),  // Configura o HttpClient com Fetch
    provideRouter(routes),           // Fornece as rotas da aplicação
    provideZoneChangeDetection()     // Habilita a detecção de mudanças no Angular com Zone.js
  ]
});
