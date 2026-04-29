import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the about summary and stats', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#about-title')?.textContent).toContain('About me');
    expect(compiled.textContent).toContain('Systems Engineer');
    expect(compiled.textContent).toContain('5+');
    expect(compiled.textContent).toContain('Projects Completed');
  });
});
