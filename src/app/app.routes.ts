import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductsViewComponent } from "./products-view/products-view.component";

export enum ROUTES_LINKS {
  HOME = "home",
  ABOUT = "about",
  CONTACT = "contact",
  SHOP = "shop",
}

export const ROUTES: Routes = [
  {
    path: "",
    redirectTo: ROUTES_LINKS.HOME,
    pathMatch: "full",
  },
  {
    path: ROUTES_LINKS.HOME,
    component: HomeComponent,
  },
  {
    path: ROUTES_LINKS.ABOUT,
    component: AboutComponent,
  },
  {
    path: ROUTES_LINKS.CONTACT,
    component: ContactComponent,
  },
  {
    path: `${ROUTES_LINKS.SHOP}/:categoryId`,
    component: ProductsViewComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
