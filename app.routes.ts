import { Routes } from '@angular/router';
import { SearchCatalogComponent } from './search-catalog/search-catalog.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchCatalogComponent },
  { path: 'details/:id', component: DetailsComponent }
];
