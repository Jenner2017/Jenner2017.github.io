import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render education entries', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#education-title')?.textContent).toContain('Education');
    expect(compiled.querySelectorAll('.education__item').length).toBe(2);
    expect(compiled.textContent).toContain('Master of Science in Information Security');
    expect(compiled.textContent).toContain('Mariano Gálvez University of Guatemala');
  });
});
