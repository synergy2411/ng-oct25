import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () =>
      import('./components/product/product.component').then(
        (c) => c.ProductComponent
      ),
  },
];
