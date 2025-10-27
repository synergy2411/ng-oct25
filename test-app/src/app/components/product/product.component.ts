import { Component, signal, computed } from '@angular/core';
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
  x = signal(0);
  y = signal(0);

  computedValue = computed(() => this.x() + this.y());

  increaseY() {
    this.y.update((value) => value + 2);
  }
  increaseX() {
    // this.x += 1      // WON'T WORK
    this.x.update((value) => value + 1);
  }

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
