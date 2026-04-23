import { Component } from '@angular/core';

import { AboutComponent } from '../../sections/about/about.component';
import { EducationComponent } from '../../sections/education/education.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { SkillsComponent } from '../../sections/skills/skills.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent
  ]
})
export class HomeComponent {}
