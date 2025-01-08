import { Component } from "@angular/core";
import { Category } from "../models/pie";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { ROUTES_LINKS } from "../app.routes";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, RouterLink, RouterLinkActive],
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  public readonly Category = Category;
  public readonly ROUTES_LINKS = ROUTES_LINKS;
}
