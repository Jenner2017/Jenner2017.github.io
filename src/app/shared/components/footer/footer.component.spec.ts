import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the contact email link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('.footer__link') as HTMLAnchorElement;

    expect(compiled.textContent).toContain('Built with Angular');
    expect(link.textContent).toContain('jennercalito2016@gmail.com');
    expect(link.getAttribute('href')).toBe('mailto:jennercalito2016@gmail.com');
  });
});
