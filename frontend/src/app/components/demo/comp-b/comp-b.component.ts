import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css',
  providers: [],
})
export class CompBComponent {
  constructor(@Optional() public counterService: CounterService) {}
}
