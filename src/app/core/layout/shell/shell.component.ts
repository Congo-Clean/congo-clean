import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="flex min-h-dvh flex-col bg-surface text-ink dark:bg-dark-surface dark:text-dark-ink">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
})
export class ShellComponent {}
