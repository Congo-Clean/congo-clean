import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink, LucideArrowRight],
  template: `
    <section class="container-page py-16 sm:py-20">
      <div
        class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-brand-blue px-8 py-12 text-white sm:px-12 sm:py-16"
      >
        <div
          class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        ></div>
        <div
          class="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl"
        ></div>

        <div class="relative mx-auto max-w-2xl text-center">
          <h2 class="text-balance text-3xl font-bold sm:text-4xl">
            {{ title() }}
          </h2>
          <p class="mt-4 text-base text-white/90 sm:text-lg">
            {{ subtitle() }}
          </p>
          <a
            [routerLink]="ctaLink()"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green-dark transition hover:bg-white/95 hover:shadow-lg"
          >
            {{ ctaLabel() }}
            <svg lucideArrowRight [size]="16"></svg>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CtaBannerComponent {
  readonly title = input('Agissons ensemble pour un Congo plus propre');
  readonly subtitle = input(
    'Rejoignez Congo Clean dans sa mission de sensibilisation, d’assainissement et de valorisation des déchets.',
  );
  readonly ctaLabel = input('Nous contacter');
  readonly ctaLink = input('/contact');
}
