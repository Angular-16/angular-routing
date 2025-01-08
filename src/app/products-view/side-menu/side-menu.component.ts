import { Component, inject } from "@angular/core";
import { PieService } from "../../services/pie.service";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ROUTES_LINKS } from "src/app/app.routes";

@Component({
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, RouterLink, RouterLinkActive],
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.css"],
})
export class SideMenuComponent {
  private readonly pieService = inject(PieService);
  public readonly ROUTES_LINKS = ROUTES_LINKS;

  public readonly pies$ = this.pieService.filteredPies$;
  public readonly selectedPie$ = this.pieService.selectedPie$;
}
