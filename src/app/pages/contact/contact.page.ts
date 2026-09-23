import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideMail,
  LucideMapPin,
  LucidePhone,
  LucideSend,
  LucideCircleCheck,
} from '@lucide/angular';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { SITE } from '../../shared/data/site.content';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    FormsModule,
    SectionHeadingComponent,
    LucideMail,
    LucideMapPin,
    LucidePhone,
    LucideSend,
    LucideCircleCheck,
  ],
  template: `
    <section class="gradient-hero border-b border-border py-16 dark:border-dark-border sm:py-20">
      <div class="container-page">
        <app-section-heading
          eyebrow="Contact"
          title="Entrons en contact"
          subtitle="Une question, une collaboration ou un désir de s’engager ? Écrivez-nous."
        />
      </div>
    </section>

    <section class="py-16 sm:py-24">
      <div class="container-page grid gap-10 lg:grid-cols-5">
        <aside class="space-y-4 lg:col-span-2">
          <div
            class="rounded-2xl border border-border bg-surface p-6 dark:border-dark-border dark:bg-dark-surface-muted"
          >
            <div class="flex items-start gap-3">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue"
              >
                <svg lucideMapPin [size]="18"></svg>
              </span>
              <div>
                <h3 class="font-semibold text-ink dark:text-dark-ink">Localisation</h3>
                <p class="mt-1 text-sm text-ink-muted dark:text-dark-ink-muted">
                  {{ location }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl border border-border bg-surface p-6 dark:border-dark-border dark:bg-dark-surface-muted"
          >
            <div class="flex items-start gap-3">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green"
              >
                <svg lucideMail [size]="18"></svg>
              </span>
              <div>
                <h3 class="font-semibold text-ink dark:text-dark-ink">Email</h3>
                <a
                  [href]="'mailto:' + email"
                  class="mt-1 block text-sm text-ink-muted transition hover:text-brand-green dark:text-dark-ink-muted"
                >
                  {{ email }}
                </a>
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl border border-border bg-surface p-6 dark:border-dark-border dark:bg-dark-surface-muted"
          >
            <div class="flex items-start gap-3">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/20 text-brand-green-dark"
              >
                <svg lucidePhone [size]="18"></svg>
              </span>
              <div>
                <h3 class="font-semibold text-ink dark:text-dark-ink">Téléphone</h3>
                <p class="mt-1 text-sm text-ink-muted dark:text-dark-ink-muted">
                  {{ phone }}
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div class="lg:col-span-3">
          @if (submitted()) {
            <div
              class="flex h-full min-h-72 flex-col items-center justify-center rounded-3xl border border-brand-green/30 bg-brand-green/5 px-8 text-center dark:bg-brand-green/10"
            >
              <svg lucideCircleCheck [size]="48" class="text-brand-green"></svg>
              <h3 class="mt-4 text-2xl font-bold text-ink dark:text-dark-ink">
                Message envoyé
              </h3>
              <p class="mt-2 max-w-md text-sm text-ink-muted dark:text-dark-ink-muted">
                Merci pour votre message. L’équipe Congo Clean vous répondra dès que possible.
              </p>
              <button
                type="button"
                class="mt-6 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
                (click)="resetForm()"
              >
                Envoyer un autre message
              </button>
            </div>
          } @else {
            <form
              class="rounded-3xl border border-border bg-surface p-6 shadow-sm dark:border-dark-border dark:bg-dark-surface-muted sm:p-8"
              (ngSubmit)="onSubmit()"
            >
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="block sm:col-span-1">
                  <span class="mb-2 block text-sm font-medium text-ink dark:text-dark-ink"
                    >Nom complet</span
                  >
                  <input
                    type="text"
                    name="name"
                    required
                    [(ngModel)]="form.name"
                    class="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 dark:border-dark-border dark:bg-dark-surface dark:text-dark-ink"
                    placeholder="Votre nom"
                  />
                </label>

                <label class="block sm:col-span-1">
                  <span class="mb-2 block text-sm font-medium text-ink dark:text-dark-ink"
                    >Email</span
                  >
                  <input
                    type="email"
                    name="email"
                    required
                    [(ngModel)]="form.email"
                    class="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 dark:border-dark-border dark:bg-dark-surface dark:text-dark-ink"
                    placeholder="vous@exemple.com"
                  />
                </label>

                <label class="block sm:col-span-2">
                  <span class="mb-2 block text-sm font-medium text-ink dark:text-dark-ink"
                    >Sujet</span
                  >
                  <input
                    type="text"
                    name="subject"
                    required
                    [(ngModel)]="form.subject"
                    class="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 dark:border-dark-border dark:bg-dark-surface dark:text-dark-ink"
                    placeholder="Ex. Collaboration, bénévolat, question…"
                  />
                </label>

                <label class="block sm:col-span-2">
                  <span class="mb-2 block text-sm font-medium text-ink dark:text-dark-ink"
                    >Message</span
                  >
                  <textarea
                    name="message"
                    required
                    rows="5"
                    [(ngModel)]="form.message"
                    class="w-full resize-y rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 dark:border-dark-border dark:bg-dark-surface dark:text-dark-ink"
                    placeholder="Décrivez votre demande…"
                  ></textarea>
                </label>
              </div>

              <button
                type="submit"
                class="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-dark"
              >
                Envoyer le message
                <svg lucideSend [size]="16"></svg>
              </button>
            </form>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactPageComponent {
  readonly location = SITE.location;
  readonly email = SITE.email;
  readonly phone = SITE.phone;
  readonly submitted = signal(false);

  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(): void {
    this.submitted.set(true);
  }

  resetForm(): void {
    this.form = { name: '', email: '', subject: '', message: '' };
    this.submitted.set(false);
  }
}
