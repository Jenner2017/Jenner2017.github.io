import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeService } from '../../core/services/theme.service';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let themeService: jasmine.SpyObj<Pick<ThemeService, 'toggleTheme' | 'isDark'>>;

  beforeEach(async () => {
    themeService = jasmine.createSpyObj('ThemeService', ['toggleTheme', 'isDark']);
    themeService.isDark.and.returnValue(false);

    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [{ provide: ThemeService, useValue: themeService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main hero content', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#hero-title')?.textContent).toContain('Jenner Calito');
    expect(compiled.textContent).toContain('Backend Software Engineer');
    expect(compiled.textContent).toContain('AVAILABLE FOR REMOTE OPPORTUNITIES');
  });

  it('should render section navigation links', () => {
    const links = Array.from(fixture.nativeElement.querySelectorAll('.hero__dock-link')) as HTMLAnchorElement[];

    expect(links.some((link) => link.getAttribute('href') === '#projects')).toBeTrue();
    expect(links.some((link) => link.getAttribute('href') === '#education')).toBeTrue();
    expect(links.some((link) => link.getAttribute('aria-label') === 'About')).toBeTrue();
  });

  it('should toggle the theme from the dock button', () => {
    const button = fixture.nativeElement.querySelector('button.hero__dock-link--theme') as HTMLButtonElement;

    button.click();

    expect(themeService.toggleTheme).toHaveBeenCalled();
    expect(button.getAttribute('aria-label')).toBe('Switch to dark theme');
    expect(button.getAttribute('aria-pressed')).toBe('false');
  });
});
