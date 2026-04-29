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
});
