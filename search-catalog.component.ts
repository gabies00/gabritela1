import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/meal.service'; // Importando o serviço de refeições
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // Incluindo os módulos necessários
  templateUrl: './search-catalog.component.html',
  styleUrls: ['./search-catalog.component.css']
})
export class SearchCatalogComponent implements OnInit {
  searchQuery: string = ''; // Variável para armazenar a consulta de pesquisa
  meals: any[] = []; // Lista de refeições

  constructor(
    private mealService: MealService, // Serviço de busca de refeições
    private router: Router // Injeção do roteador para navegação
  ) {}

  // Método de busca das refeições
  searchMeals(): void {
    if (this.searchQuery.trim()) {
      this.mealService.searchMeals(this.searchQuery).subscribe({
        next: (data) => {
          this.meals = data.meals || [];
        },
        error: (err) => console.error('Erro ao buscar refeições', err),
      });
    }
  }

  // Método para navegação para a página de receitas
  searchRecipes() {
    // Código comentado para preservar a estrutura, sem apagar
    // this.spoonacularService.searchRecipes(this.query); 
    this.router.navigate(['/recipes']);
  }

  ngOnInit(): void {}
}
