import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Torna o serviço disponível em toda a aplicação
})
export class MealService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  searchMeals(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?s=${query}`);
  }

  getMealDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories.php`);
  }
}
