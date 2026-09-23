import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideMail,
  LucideMapPin,
  LucidePhone,
  LucideLeaf,
} from '@lucide/angular';
import { NAV_LINKS, SITE } from '../../../shared/data/site.content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideMail, LucideMapPin, LucidePhone, LucideLeaf],
  template: `
    <footer class="border-t border-border bg-surface-muted dark:border-dark-border dark:bg-dark-surface-muted">
      <div class="container-page py-14">
        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div class="lg:col-span-2">
            <a routerLink="/" class="inline-flex items-center gap-3">
              <img
                src="/assets/images/logo.png"
                alt="Congo Clean"
                class="h-12 w-auto object-contain"
              />
            </a>
            <p class="mt-4 max-w-md text-sm leading-relaxed text-ink-muted dark:text-dark-ink-muted">
              {{ description }}
            </p>
            <p
              class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-green dark:text-brand-green-light"
            >
              <svg lucideLeaf [size]="16"></svg>
              Responsabilité · Citoyenneté · Environnement
            </p>
          </div>

          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider text-ink dark:text-dark-ink">
              Navigation
            </h3>
            <ul class="mt-4 space-y-2">
              @for (link of navLinks; track link.path) {
                <li>
                  <a
                    [routerLink]="link.path"
                    class="text-sm text-ink-muted transition hover:text-brand-green dark:text-dark-ink-muted dark:hover:text-brand-green-light"
                  >
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <div>
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider text-ink dark:text-dark-ink">
              Contact
            </h3>
            <ul class="mt-4 space-y-3 text-sm text-ink-muted dark:text-dark-ink-muted">
              <li class="flex items-start gap-2">
                <svg lucideMapPin [size]="16" class="mt-0.5 shrink-0 text-brand-blue"></svg>
                <span>{{ location }}</span>
              </li>
              <li class="flex items-center gap-2">
                <svg lucideMail [size]="16" class="shrink-0 text-brand-blue"></svg>
                <a
                  [href]="'mailto:' + email"
                  class="transition hover:text-brand-green dark:hover:text-brand-green-light"
                >
                  {{ email }}
                </a>
              </li>
              <li class="flex items-center gap-2">
                <svg lucidePhone [size]="16" class="shrink-0 text-brand-blue"></svg>
                <span>{{ phone }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-ink-muted dark:border-dark-border dark:text-dark-ink-muted sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {{ year }} Congo Clean. Tous droits réservés.</p>
          <p>Ensemble pour un environnement plus propre.</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly navLinks = NAV_LINKS;
  readonly description = SITE.description;
  readonly location = SITE.location;
  readonly email = SITE.email;
  readonly phone = SITE.phone;
  readonly year = new Date().getFullYear();
}
