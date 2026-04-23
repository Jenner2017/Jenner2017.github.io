import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true
})
export class ExperienceComponent {
  protected readonly experiences = [
    {
      role: 'Systems Programmer',
      company: 'Superintendencia de Administración Tributaria (SAT)',
      period: 'May 2021 - Present',
      description: 'Implemented REST services using microservices architecture for the OEA and AFP systems, built user interfaces with Angular, modeled BPMN processes in Alfresco, and developed both automatic and manual synchronization components for AFP, reducing support tickets by more than 90%.'
    },
    {
      role: 'Technical Services',
      company: 'Superintendencia de Administración Tributaria (SAT)',
      period: 'April 2019 - May 2021',
      description: 'Developed graphical interfaces and REST services for the Temporary Suspension module in RTU Digital, created a taxpayer (NIT) query component that reduced in-person requests by over 80% during the pandemic, and contributed to a pilot document management system and a public information query module.'
    }
  ];
}
