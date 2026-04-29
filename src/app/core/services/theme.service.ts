import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'portfolio-theme';
  private readonly themeState = signal<ThemeMode>(this.resolveInitialTheme());

  readonly theme = computed(() => this.themeState());
  readonly isDark = computed(() => this.themeState() === 'dark');

  constructor() {
    this.applyTheme(this.themeState(), false);
  }

  toggleTheme(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  setTheme(theme: ThemeMode): void {
    this.themeState.set(theme);
    this.persistTheme(theme);
    this.applyTheme(theme, true);
  }

  private resolveInitialTheme(): ThemeMode {
    const rootTheme = this.document.documentElement.dataset['theme'];
    if (rootTheme === 'light' || rootTheme === 'dark') {
      return rootTheme;
    }

    try {
      const storedTheme = localStorage.getItem(this.storageKey);
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }
    } catch {
      // Ignore storage access failures and fall back to the system preference.
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private persistTheme(theme: ThemeMode): void {
    try {
      localStorage.setItem(this.storageKey, theme);
    } catch {
      // Ignore storage access failures to keep theme toggling functional.
    }
  }

  private applyTheme(theme: ThemeMode, withTransition: boolean): void {
    const root = this.document.documentElement;

    root.dataset['theme'] = theme;
    if (withTransition) {
      root.classList.add('theme-switching');
      window.setTimeout(() => root.classList.remove('theme-switching'), 320);
    }

    this.updateThemeColor(theme);
    this.updateFavicon(theme);
  }

  private updateThemeColor(theme: ThemeMode): void {
    const themeColor = theme === 'dark' ? '#071019' : '#fbfaf7';
    let meta = this.document.querySelector('meta[name="theme-color"]');

    if (!meta) {
      meta = this.document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      this.document.head.appendChild(meta);
    }

    meta.setAttribute('content', themeColor);
  }

  private updateFavicon(theme: ThemeMode): void {
    const svg = theme === 'dark'
      ? `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="18" fill="#071019"/>
          <path d="M39 14a18 18 0 1 0 11 32.2A22 22 0 1 1 39 14Z" fill="#e0f2fe"/>
          <circle cx="44" cy="18" r="3" fill="#7dd3fc"/>
          <circle cx="50" cy="25" r="2" fill="#bfdbfe"/>
        </svg>
      `
      : `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="18" fill="#fbfaf7"/>
          <circle cx="32" cy="32" r="14" fill="#111827"/>
          <path d="M32 12v8M32 44v8M12 32h8M44 32h8M18.2 18.2l5.7 5.7M40.1 40.1l5.7 5.7M45.8 18.2l-5.7 5.7M23.9 40.1l-5.7 5.7" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `;
    const encodedIcon = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    let favicon = this.document.querySelector('link[rel="icon"]');

    if (!favicon) {
      favicon = this.document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      this.document.head.appendChild(favicon);
    }

    favicon.setAttribute('type', 'image/svg+xml');
    favicon.setAttribute('href', encodedIcon);
  }
}
