import { Component } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [OverviewComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products = [
    {
      title: 'IPhone 17 Pro',
      price: 1.5,
      isAvailable: true,
    },
    {
      title: 'Google Pixel',
      price: 1.2,
      isAvailable: false,
    },
    {
      title: 'Samsung Z Fold',
      price: 1.75,
      isAvailable: true,
    },
  ];
}
