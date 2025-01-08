import { Component, Input, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";
import { ROUTES_LINKS } from "src/app/app.routes";
import { Pie } from "src/app/models/pie";
import { CartService } from "src/app/services/cart.service";

@Component({
  standalone: true,
  imports: [MatButtonModule],
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input({ required: true })
  pie!: Pie;

  public readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  public selectPie(pie: Pie): void {
    this.router.navigate([`../${ROUTES_LINKS.SHOP}`, pie.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
