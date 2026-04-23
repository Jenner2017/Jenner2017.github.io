import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true
})
export class SkillsComponent {
  protected readonly skillCategories = [
    {
      name: 'Backend',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Alfresco', 'Microservicios', 'REST APIs', 'Hibernate']
    },
    {
      name: 'Frontend',
      skills: ['Angular', 'TypeScript', 'HTML5/CSS3', 'SASS']
    },
    {
      name: 'Tools & DevOps',
      skills: ['Docker', 'Git', 'Maven/Gradle', 'AWS', 'JUnit', 'Jenkins']
    }
  ];
}
