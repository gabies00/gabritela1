import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
  receitas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.buscarReceitas();
  }

  buscarReceitas(): void {
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY';
    this.http.get<any>(apiUrl).subscribe((response) => {
      this.receitas = response.results;
    });
  }
}
