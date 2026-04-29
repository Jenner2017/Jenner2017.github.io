import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render skill categories and badges', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#skills-title')?.textContent).toContain('Skills');
    expect(compiled.textContent).toContain('Backend');
    expect(compiled.textContent).toContain('Frontend');
    expect(compiled.textContent).toContain('Tools & DevOps');
    expect(compiled.querySelectorAll('.skill-badge').length).toBe(17);
  });
});
