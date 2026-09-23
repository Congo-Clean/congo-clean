import { Component } from '@angular/core';
import {
  LucideBrain,
  LucideLeaf,
  LucideHandshake,
  LucideSparkles,
} from '@lucide/angular';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { SITE } from '../../shared/data/site.content';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    CtaBannerComponent,
    LucideBrain,
    LucideLeaf,
    LucideHandshake,
    LucideSparkles,
  ],
  template: `
    <section class="gradient-hero border-b border-border py-16 dark:border-dark-border sm:py-20">
      <div class="container-page">
        <app-section-heading
          eyebrow="À propos"
          title="Qui est Congo Clean ?"
          subtitle="Une organisation à vocation environnementale engagée pour une culture de responsabilité et de citoyenneté en République démocratique du Congo."
        />
      </div>
    </section>

    <section class="py-16 sm:py-24">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2">
        <div class="relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80"
            alt="Communauté mobilisée pour l’environnement"
            class="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-tr from-brand-green/25 to-brand-blue/15"
          ></div>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Notre identité
          </p>
          <h2 class="mt-3 text-3xl font-bold text-ink dark:text-dark-ink sm:text-4xl">
            Responsabilité environnementale et citoyenneté active
          </h2>
          <p class="mt-5 text-base leading-relaxed text-ink-muted dark:text-dark-ink-muted">
            {{ description }}
          </p>
          <p class="mt-4 text-base leading-relaxed text-ink-muted dark:text-dark-ink-muted">
            {{ mission }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-surface-muted py-16 dark:bg-dark-surface-muted sm:py-24">
      <div class="container-page">
        <app-section-heading
          eyebrow="Notre approche"
          title="Éduquer, mobiliser, transformer"
          subtitle="Le cerveau de notre logo symbolise le changement de mentalité : la clé d’un environnement durable."
        />

        <div class="mt-12 grid gap-6 md:grid-cols-2">
          @for (item of pillars; track item.title) {
            <article
              class="flex gap-4 rounded-2xl border border-border bg-surface p-6 dark:border-dark-border dark:bg-dark-surface"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green"
              >
                @switch (item.icon) {
                  @case ('brain') {
                    <svg lucideBrain [size]="24"></svg>
                  }
                  @case ('leaf') {
                    <svg lucideLeaf [size]="24"></svg>
                  }
                  @case ('handshake') {
                    <svg lucideHandshake [size]="24"></svg>
                  }
                  @case ('sparkles') {
                    <svg lucideSparkles [size]="24"></svg>
                  }
                }
              </div>
              <div>
                <h3 class="text-lg font-semibold text-ink dark:text-dark-ink">
                  {{ item.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-ink-muted dark:text-dark-ink-muted">
                  {{ item.text }}
                </p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <app-cta-banner
      title="Faites partie du changement"
      subtitle="Sensibilisez, agissez et valorisez avec Congo Clean."
    />
  `,
})
export class AboutPageComponent {
  readonly description = SITE.description;
  readonly mission = SITE.mission;

  readonly pillars = [
    {
      icon: 'brain' as const,
      title: 'Changer les mentalités',
      text: 'Nous plaçons l’éducation et la sensibilisation au centre de chaque action.',
    },
    {
      icon: 'leaf' as const,
      title: 'Protéger l’environnement',
      text: 'Chaque geste compte pour préserver nos espaces de vie et nos ressources.',
    },
    {
      icon: 'handshake' as const,
      title: 'Mobiliser les communautés',
      text: 'Élèves, familles et citoyens : ensemble, nous construisons des habitudes durables.',
    },
    {
      icon: 'sparkles' as const,
      title: 'Créer un impact visible',
      text: 'Des actions concrètes d’assainissement et de valorisation au service du bien commun.',
    },
  ];
}
