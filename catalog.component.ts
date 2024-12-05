import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importando o Router
import { SearchCatalogComponent } from '../search-catalog/search-catalog.component';

@Component( 
{
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, SearchCatalogComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
}
)
export class CatalogComponent {
  recipes = [
    { id: '1', image: 'image1.jpg', category: 'Massas', title: 'Macarrão com molho de tomate', cookingTime: 20, serving: 2 },
    { id: '2', image: 'image2.jpg', category: 'Sopas', title: 'Sopa de legumes', cookingTime: 30, serving: 4 },
    // Adicione mais receitas conforme necessário
  ];

  // Configurações de paginação
  itemsPerPage = 4;  
  currentPage = 1;   

  get paginatedRecipes() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.recipes.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Função de navegação de página
  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Calcular o total de páginas com base no número de receitas
  get totalPages() {
    return Math.ceil(this.recipes.length / this.itemsPerPage);
  }

  tabs = [
    { id: 'tudo', label: 'Tudo', active: true },
    { id: 'receitas-rapidas', label: 'Receitas rápidas', active: false },
    { id: 'pratos-familia', label: 'Pratos para Família', active: false },
    { id: 'cafe-manha', label: 'Café da manhã', active: false },
    { id: 'almoco', label: 'Almoço', active: false },
    { id: 'sopas', label: 'Sopas e Caldos', active: false },
    { id: 'saladas', label: 'Saladas', active: false },
    { id: 'petiscos', label: 'Petiscos e Aperitivos', active: false },
    { id: 'grelhados', label: 'Grelhados e Assados', active: false },
    { id: 'sobremesas', label: 'Sobremesas', active: false },
    { id: 'bebidas', label: 'Bebidas', active: false },
  ];

  tabClicked(tab: any): void {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

  constructor(private router: Router) {}

  // Método para navegar para a página de detalhes
  navigateToDetails(recipeId: string): void {
    this.router.navigate(['/details', recipeId]);  // Navegando para a rota de detalhes passando o ID da receita
  }
}
