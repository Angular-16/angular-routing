import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, MatButtonModule, HeaderComponent],
  selector: 'app-root',
  template: `
    <app-header />
    <router-outlet />
  `,
})
export class AppComponent {}
