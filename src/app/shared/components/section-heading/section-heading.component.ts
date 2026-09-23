import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="mx-auto max-w-2xl text-center" [class]="align() === 'left' ? 'mx-0 text-left' : ''">
      @if (eyebrow()) {
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-blue-light"
        >
          {{ eyebrow() }}
        </p>
      }
      <h2
        class="text-balance text-3xl font-bold text-ink dark:text-dark-ink sm:text-4xl"
      >
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p
          class="mt-4 text-pretty text-base leading-relaxed text-ink-muted dark:text-dark-ink-muted sm:text-lg"
        >
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly align = input<'center' | 'left'>('center');
}
