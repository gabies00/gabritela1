import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../services/meal.service';  // Importando o serviço MealService
import { CommonModule } from '@angular/common';  // Importando CommonModule
import { RouterModule } from '@angular/router';  // Importando RouterModule

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  meal: any = null;  // Armazenará os dados da refeição
  ingredients: string[] = [];  // Lista de ingredientes

  recipeId: string = '';  // Variável para armazenar o ID da receita capturado da URL

  constructor(
    private route: ActivatedRoute,  // Para acessar os parâmetros da rota
    private mealService: MealService  // Serviço para buscar detalhes da refeição
  ) {}

  ngOnInit(): void {
    // Captura o parâmetro "id" da rota
    this.recipeId = this.route.snapshot.paramMap.get('id') || '';
    console.log('Receita ID capturado:', this.recipeId);

    if (this.recipeId) {
      this.mealService.getMealDetails(this.recipeId).subscribe({
        next: (data) => {
          this.meal = data.meals[0];
          this.extractIngredients();  // Chama a função para extrair os ingredientes
        },
        error: (err) => console.error('Erro ao buscar detalhes da receita', err),
      });
    }
  }

  // Função para extrair os ingredientes da refeição
  private extractIngredients(): void {
    this.ingredients = []; // Limpa a lista de ingredientes antes de adicionar novos
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.meal[`strIngredient${i}`];
      const measure = this.meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        this.ingredients.push(`${ingredient} - ${measure}`);
      }
    }
  }
}
