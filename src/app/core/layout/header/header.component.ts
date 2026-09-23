import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideMenu,
  LucideX,
  LucideSun,
  LucideMoon,
} from '@lucide/angular';
import { ThemeService } from '../../services/theme.service';
import { NAV_LINKS, SITE } from '../../../shared/data/site.content';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideMenu, LucideX, LucideSun, LucideMoon],
  template: `
    <header
      class="sticky top-0 z-50 border-b transition-colors duration-300"
      [class]="
        scrolled()
          ? 'border-border/80 bg-surface/85 backdrop-blur-xl dark:border-dark-border/80 dark:bg-dark-surface/85'
          : 'border-transparent bg-surface/70 backdrop-blur-md dark:bg-dark-surface/70'
      "
    >
      <div class="container-page flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a routerLink="/" class="flex items-center gap-3" (click)="closeMenu()">
          <img
            src="/assets/images/logo.png"
            alt="Congo Clean"
            class="h-11 w-auto object-contain sm:h-12"
          />
          <span class="sr-only">{{ siteName }}</span>
        </a>

        <nav class="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="text-brand-green bg-brand-green/10 dark:text-brand-green-light dark:bg-brand-green/15"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              class="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition hover:bg-surface-muted hover:text-ink dark:text-dark-ink-muted dark:hover:bg-dark-surface-muted dark:hover:text-dark-ink"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition hover:border-brand-blue/40 hover:text-brand-blue dark:border-dark-border dark:text-dark-ink dark:hover:text-brand-blue-light"
            [attr.aria-label]="
              theme.theme() === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'
            "
            (click)="theme.toggle()"
          >
            @if (theme.theme() === 'dark') {
              <svg lucideSun [size]="18"></svg>
            } @else {
              <svg lucideMoon [size]="18"></svg>
            }
          </button>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink md:hidden dark:border-dark-border dark:text-dark-ink"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-menu"
            aria-label="Ouvrir le menu"
            (click)="toggleMenu()"
          >
            @if (menuOpen()) {
              <svg lucideX [size]="20"></svg>
            } @else {
              <svg lucideMenu [size]="20"></svg>
            }
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <div
          id="mobile-menu"
          class="border-t border-border bg-surface md:hidden dark:border-dark-border dark:bg-dark-surface"
        >
          <nav class="container-page flex flex-col gap-1 py-4" aria-label="Navigation mobile">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                routerLinkActive="text-brand-green bg-brand-green/10 dark:text-brand-green-light"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="rounded-xl px-4 py-3 text-base font-medium text-ink transition hover:bg-surface-muted dark:text-dark-ink dark:hover:bg-dark-surface-muted"
                (click)="closeMenu()"
              >
                {{ link.label }}
              </a>
            }
          </nav>
        </div>
      }
    </header>
  `,
})
export class HeaderComponent {
  readonly theme = inject(ThemeService);
  readonly navLinks = NAV_LINKS;
  readonly siteName = SITE.name;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }
}
