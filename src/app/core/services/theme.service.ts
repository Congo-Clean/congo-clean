import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'congo-clean-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly theme = signal<ThemeMode>(this.resolveInitialTheme());

  constructor() {
    effect(() => {
      const mode = this.theme();
      this.applyTheme(mode);
      if (this.isBrowser) {
        localStorage.setItem(STORAGE_KEY, mode);
      }
    });
  }

  toggle(): void {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
  }

  private resolveInitialTheme(): ThemeMode {
    if (!this.isBrowser) {
      return 'light';
    }

    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private applyTheme(mode: ThemeMode): void {
    const root = this.document.documentElement;
    root.classList.toggle('dark', mode === 'dark');
    root.style.colorScheme = mode;
  }
}
