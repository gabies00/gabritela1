import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private apiUrl = 'https://developer.edamam.com/';  // Substitua pela sua chave da API

  constructor(private http: HttpClient) { }

  // Método para buscar receitas
  buscarReceitas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

