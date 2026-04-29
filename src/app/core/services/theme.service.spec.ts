import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('theme-switching');
    localStorage.clear();
    spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);
  });

  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('theme-switching');
    localStorage.clear();
  });

  it('should initialize from the root data theme', () => {
    document.documentElement.dataset['theme'] = 'dark';

    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('dark');
    expect(service.isDark()).toBeTrue();
  });

  it('should initialize from localStorage when no root theme exists', () => {
    localStorage.setItem('portfolio-theme', 'dark');

    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });

  it('should initialize from system preference when no stored theme exists', () => {
    (window.matchMedia as jasmine.Spy).and.returnValue({ matches: true } as MediaQueryList);

    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('dark');
  });

  it('should persist and apply a selected theme', fakeAsync(() => {
    const service = TestBed.inject(ThemeService);

    service.setTheme('dark');

    expect(service.theme()).toBe('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(document.documentElement.classList.contains('theme-switching')).toBeTrue();

    tick(320);

    expect(document.documentElement.classList.contains('theme-switching')).toBeFalse();
  }));

  it('should toggle between light and dark themes', () => {
    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('light');

    service.toggleTheme();
    expect(service.theme()).toBe('dark');

    service.toggleTheme();
    expect(service.theme()).toBe('light');
  });

  it('should update theme-color metadata and favicon', () => {
    const service = TestBed.inject(ThemeService);

    service.setTheme('dark');

    const themeColor = document.querySelector('meta[name="theme-color"]');
    const favicon = document.querySelector('link[rel="icon"]');

    expect(themeColor?.getAttribute('content')).toBe('#071019');
    expect(favicon?.getAttribute('type')).toBe('image/svg+xml');
    expect(favicon?.getAttribute('href')).toContain('data:image/svg+xml');
  });

  it('should keep working when storage access fails', () => {
    (window.matchMedia as jasmine.Spy).and.returnValue({ matches: false } as MediaQueryList);
    spyOn(localStorage, 'getItem').and.throwError('blocked');
    spyOn(localStorage, 'setItem').and.throwError('blocked');

    const service = TestBed.inject(ThemeService);

    expect(() => service.setTheme('dark')).not.toThrow();
    expect(service.theme()).toBe('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });
});
