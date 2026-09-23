import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideGraduationCap,
  LucideBroom,
  LucideRecycle,
  LucideArrowRight,
} from '@lucide/angular';
import { ActionAxis } from '../../models/navigation.model';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [RouterLink, LucideGraduationCap, LucideBroom, LucideRecycle, LucideArrowRight],
  template: `
    <article
      class="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg hover:shadow-brand-green/10 dark:border-dark-border dark:bg-dark-surface-muted dark:hover:border-brand-green/30"
    >
      <div class="relative aspect-[16/10] overflow-hidden">
        <img
          [src]="axis().image"
          [alt]="axis().title"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
        ></div>
        <div
          class="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green text-white shadow-md"
        >
          @switch (axis().icon) {
            @case ('graduation') {
              <svg lucideGraduationCap [size]="22"></svg>
            }
            @case ('broom') {
              <svg lucideBroom [size]="22"></svg>
            }
            @case ('recycle') {
              <svg lucideRecycle [size]="22"></svg>
            }
          }
        </div>
      </div>

      <div class="flex flex-1 flex-col p-6">
        <h3 class="text-xl font-semibold text-ink dark:text-dark-ink">
          {{ axis().title }}
        </h3>
        <p class="mt-3 flex-1 text-sm leading-relaxed text-ink-muted dark:text-dark-ink-muted">
          {{ axis().summary }}
        </p>
        <a
          [routerLink]="['/actions']"
          [fragment]="axis().id"
          class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition hover:gap-3 dark:text-brand-green-light"
        >
          En savoir plus
          <svg lucideArrowRight [size]="16"></svg>
        </a>
      </div>
    </article>
  `,
})
export class FeatureCardComponent {
  readonly axis = input.required<ActionAxis>();
}
