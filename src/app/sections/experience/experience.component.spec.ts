import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render experience entries', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#experience-title')?.textContent).toContain('Experience');
    expect(compiled.querySelectorAll('.experience__item').length).toBe(2);
    expect(compiled.textContent).toContain('Systems Programmer');
    expect(compiled.textContent).toContain('Technical Services');
  });
});
