import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encap',
  templateUrl: './view-encap.component.html',
  styleUrl: './view-encap.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ViewEncapComponent {}
