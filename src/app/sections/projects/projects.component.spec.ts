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

  it('should render three project cards in the carousel window', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card:not(.project-card--buffer)');

    expect(cards.length).toBe(3);
    expect(compiled.textContent).toContain('RTU Digital');
    expect(compiled.textContent).toContain('Spring Boot');
  });

  it('should move to the next carousel project set', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nextButton = compiled.querySelector('[aria-label="Next projects"]') as HTMLButtonElement;

    nextButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.projects__track--transitioning')).not.toBeNull();

    const track = compiled.querySelector('.projects__track') as HTMLElement;
    track.dispatchEvent(new TransitionEvent('transitionend', { bubbles: true }));
    fixture.detectChanges(false);

    const visibleCardsText = getVisibleProjectCardsText(compiled);
    expect(visibleCardsText).toContain('Public Function Assistants System (AFP)');
    expect(visibleCardsText).toContain('Courier Management System');
    expect(visibleCardsText).not.toContain('RTU Digital');
  });

  it('should wrap to the previous carousel project set', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const previousButton = compiled.querySelector('[aria-label="Previous projects"]') as HTMLButtonElement;

    previousButton.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.projects__track--previous')).not.toBeNull();

    const track = compiled.querySelector('.projects__track') as HTMLElement;
    track.dispatchEvent(new TransitionEvent('transitionend', { bubbles: true }));
    fixture.detectChanges(false);

    const visibleCardsText = getVisibleProjectCardsText(compiled);
    expect(visibleCardsText).toContain('Temporary Business Closure System');
    expect(visibleCardsText).toContain('RTU Digital');
    expect(visibleCardsText).toContain('Public Function Assistants System (AFP)');
  });

  it('should open a confidential project modal from the view project button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.project-card:not(.project-card--buffer) .project-card__link') as HTMLButtonElement;

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
    const openButton = compiled.querySelector('.project-card:not(.project-card--buffer) .project-card__link') as HTMLButtonElement;

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

function getVisibleProjectCardsText(compiled: HTMLElement): string {
  return Array.from(compiled.querySelectorAll('.project-card:not(.project-card--buffer)'))
    .map((card) => card.textContent ?? '')
    .join(' ');
}
