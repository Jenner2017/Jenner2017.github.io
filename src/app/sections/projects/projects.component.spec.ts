import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the projects section heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#projects-title')?.textContent).toContain('Projects');
  });

  it('should render all project cards with tags', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');

    expect(cards.length).toBe(6);
    expect(compiled.textContent).toContain('RTU Digital');
    expect(compiled.textContent).toContain('Spring Boot');
  });

  it('should open a confidential project modal from the view project button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.project-card__link') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    const modal = compiled.querySelector('.project-modal');
    expect(modal).not.toBeNull();
    expect(modal?.getAttribute('role')).toBe('dialog');
    expect(compiled.textContent).toContain('RTU Digital');
    expect(compiled.textContent).toContain('Private / Confidential');
  });

  it('should close the project modal from the close button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const openButton = compiled.querySelector('.project-card__link') as HTMLButtonElement;

    openButton.click();
    fixture.detectChanges();

    const closeButton = compiled.querySelector('.project-modal__close') as HTMLButtonElement;
    closeButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.project-modal--closing')).not.toBeNull();

    const backdrop = compiled.querySelector('.project-modal-backdrop') as HTMLElement;
    backdrop.dispatchEvent(new AnimationEvent('animationend', { bubbles: true }));
    fixture.detectChanges();

    expect(compiled.querySelector('.project-modal')).toBeNull();
  });
});
