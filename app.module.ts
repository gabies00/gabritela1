import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importando HttpClientModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],  // Adicionando HttpClientModule aqui
  providers: [],
  bootstrap: AppComponent[],
})
export class AppModule {}
