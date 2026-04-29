import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render every portfolio section', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-hero')).not.toBeNull();
    expect(compiled.querySelector('#about app-about')).not.toBeNull();
    expect(compiled.querySelector('#skills app-skills')).not.toBeNull();
    expect(compiled.querySelector('#experience app-experience')).not.toBeNull();
    expect(compiled.querySelector('#projects app-projects')).not.toBeNull();
    expect(compiled.querySelector('#education app-education')).not.toBeNull();
  });
});
