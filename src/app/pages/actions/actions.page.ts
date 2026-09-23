import { Component } from '@angular/core';
import {
  LucideGraduationCap,
  LucideBroom,
  LucideRecycle,
  LucideCheck,
} from '@lucide/angular';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { ACTION_AXES } from '../../shared/data/site.content';

@Component({
  selector: 'app-actions-page',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    CtaBannerComponent,
    LucideGraduationCap,
    LucideBroom,
    LucideRecycle,
    LucideCheck,
  ],
  template: `
    <section class="gradient-hero border-b border-border py-16 dark:border-dark-border sm:py-20">
      <div class="container-page">
        <app-section-heading
          eyebrow="Nos actions"
          title="Trois axes pour un Congo plus propre"
          subtitle="Sensibilisation, assainissement et recyclage : notre feuille de route pour transformer les comportements et le cadre de vie."
        />
      </div>
    </section>

    <section class="py-10 sm:py-16">
      <div class="container-page space-y-16 sm:space-y-24">
        @for (axis of axes; track axis.id; let odd = $odd) {
          <article
            [id]="axis.id"
            class="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2"
          >
            <div [class.lg:order-2]="odd">
              <div class="relative overflow-hidden rounded-3xl">
                <img
                  [src]="axis.image"
                  [alt]="axis.title"
                  class="aspect-[16/11] w-full object-cover"
                  loading="lazy"
                />
                <div
                  class="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white shadow-lg"
                >
                  @switch (axis.icon) {
                    @case ('graduation') {
                      <svg lucideGraduationCap [size]="24"></svg>
                    }
                    @case ('broom') {
                      <svg lucideBroom [size]="24"></svg>
                    }
                    @case ('recycle') {
                      <svg lucideRecycle [size]="24"></svg>
                    }
                  }
                </div>
              </div>
            </div>

            <div [class.lg:order-1]="odd">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
                Axe {{ $index + 1 }}
              </p>
              <h2 class="mt-3 text-3xl font-bold text-ink dark:text-dark-ink">
                {{ axis.title }}
              </h2>
              <p class="mt-4 text-base leading-relaxed text-ink-muted dark:text-dark-ink-muted">
                {{ axis.description }}
              </p>
              <ul class="mt-6 space-y-3">
                @for (point of axis.points; track point) {
                  <li class="flex items-start gap-3 text-sm text-ink dark:text-dark-ink">
                    <span
                      class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green"
                    >
                      <svg lucideCheck [size]="12" [strokeWidth]="3"></svg>
                    </span>
                    {{ point }}
                  </li>
                }
              </ul>
            </div>
          </article>
        }
      </div>
    </section>

    <app-cta-banner
      title="Vous voulez soutenir une action ?"
      subtitle="Écrivez-nous pour collaborer sur une campagne, un atelier ou une opération de nettoyage."
    />
  `,
})
export class ActionsPageComponent {
  readonly axes = ACTION_AXES;
}
