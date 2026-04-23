import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true
})
export class EducationComponent {
  protected readonly educationItems = [
    {
      degree: 'Master of Science in Information Security',
      institution: 'Mariano Gálvez University of Guatemala',
      period: 'Completed in September 2023',
      description: 'Graduated with honors (Cum Laude)'
    },
    {
      degree: 'Bachelor of Science in Information Systems Engineering',
      institution: 'Mariano Gálvez University of Guatemala',
      period: 'Completed in February 2023',
      description: ''
    }
  ];
}
