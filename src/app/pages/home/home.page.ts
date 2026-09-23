import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowRight,
  LucideBrain,
  LucideUsers,
  LucideLeaf,
  LucideTarget,
} from '@lucide/angular';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import {
  ACTION_AXES,
  HERO_IMAGE,
  SITE,
  VALUES,
} from '../../shared/data/site.content';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeadingComponent,
    FeatureCardComponent,
    CtaBannerComponent,
    LucideArrowRight,
    LucideBrain,
    LucideUsers,
    LucideLeaf,
    LucideTarget,
  ],
  template: `
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img
          [src]="heroImage"
          alt="Action environnementale communautaire"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25"
        ></div>
      </div>

      <div class="container-page relative flex min-h-[78vh] items-center py-20 sm:min-h-[85vh]">
        <div class="max-w-2xl text-white">
          <p
            class="reveal text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow"
          >
            Organisation environnementale · RDC
          </p>
          <h1
            class="reveal reveal-delay-1 mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Congo Clean
          </h1>
          <p class="reveal reveal-delay-2 mt-5 max-w-xl text-lg text-white/90 sm:text-xl">
            {{ tagline }}
          </p>
          <div class="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              routerLink="/actions"
              class="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
            >
              Découvrir nos actions
              <svg lucideArrowRight [size]="16"></svg>
            </a>
            <a
              routerLink="/a-propos"
              class="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Notre mission
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission teaser -->
    <section class="gradient-hero py-16 sm:py-24">
      <div class="container-page">
        <app-section-heading
          eyebrow="Notre mission"
          title="Un changement de mentalité pour un cadre de vie plus sain"
          [subtitle]="mission"
        />

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          @for (value of values; track value.title; let i = $index) {
            <article
              class="rounded-2xl border border-border bg-surface/80 p-6 transition hover:border-brand-green/30 dark:border-dark-border dark:bg-dark-surface-muted/80"
              [class.float-soft]="i === 1"
            >
              <div
                class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/15"
              >
                @switch (value.icon) {
                  @case ('brain') {
                    <svg lucideBrain [size]="22"></svg>
                  }
                  @case ('users') {
                    <svg lucideUsers [size]="22"></svg>
                  }
                  @case ('leaf') {
                    <svg lucideLeaf [size]="22"></svg>
                  }
                  @case ('target') {
                    <svg lucideTarget [size]="22"></svg>
                  }
                }
              </div>
              <h3 class="text-lg font-semibold text-ink dark:text-dark-ink">
                {{ value.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-muted dark:text-dark-ink-muted">
                {{ value.description }}
              </p>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- Three axes -->
    <section class="py-16 sm:py-24">
      <div class="container-page">
        <app-section-heading
          eyebrow="Nos axes d’action"
          title="Trois leviers pour un impact durable"
          subtitle="Sensibilisation, assainissement et recyclage : une approche complète pour protéger l’environnement en RDC."
        />

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          @for (axis of axes; track axis.id) {
            <app-feature-card [axis]="axis" />
          }
        </div>
      </div>
    </section>

    <app-cta-banner />
  `,
})
export class HomePageComponent {
  readonly tagline = SITE.tagline;
  readonly mission = SITE.mission;
  readonly axes = ACTION_AXES;
  readonly values = VALUES;
  readonly heroImage = HERO_IMAGE;
}
