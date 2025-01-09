import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CartService } from 'src/app/services/cart.service';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [CardComponent, NgFor],
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.css'],
})
export class SubSectionComponent {
  public readonly featuredProducts =
    inject(CartService).featuredPiesPlusQuantity;
}
