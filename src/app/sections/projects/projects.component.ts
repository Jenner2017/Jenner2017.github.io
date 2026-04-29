import { Component, HostListener } from '@angular/core';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true
})
export class ProjectsComponent {
  protected selectedProject: Project | null = null;
  protected isProjectModalClosing = false;

  protected readonly projects: Project[] = [
    {
      title: 'RTU Digital',
      description: 'Digital procedures management system with REST service integration and microservices architecture for the Superintendencia de Administración Tributaria (SAT).',
      tags: ['Spring Boot', 'PostgreSQL', 'Angular', 'Docker', 'AWS', 'Alfresco'],
      link: '#'
    },
    {
      title: 'Public Function Assistants System (AFP)',
      description: 'System for managing public function assistants in Guatemala, including features for data queries, process management, and report generation.',
      tags: ['Spring Boot', 'PostgreSQL', 'Oracle', 'Angular', 'Docker', 'AWS', 'Alfresco'],
      link: '#'
    },
    {
      title: 'Authorized Economic Operator System (OEA)',
      description: 'System for managing authorized economic operators, including data queries, process management, and reporting functionalities.',
      tags: ['Spring Boot', 'PostgreSQL', 'Oracle', 'Angular', 'Docker', 'AWS', 'Alfresco'],
      link: '#'
    },
    {
      title: 'Courier Management System',
      description: 'System for managing the reception and shipment of goods for the Superintendencia de Administración Tributaria (SAT).',
      tags: ['Spring Boot', 'PostgreSQL', 'Oracle', 'Angular', 'Docker', 'AWS', 'Alfresco'],
      link: '#'
    },
    {
      title: 'Document Management Pilot System',
      description: 'Pilot system for document management at the Superintendencia de Administración Tributaria (SAT), including storage, retrieval, and document lifecycle management.',
      tags: ['Spring Boot', 'PostgreSQL', 'Oracle', 'Angular', 'Docker', 'AWS', 'Alfresco'],
      link: '#'
    },
    {
      title: 'Temporary Business Closure System',
      description: 'System for managing temporary business closures for the Superintendencia de Administración Tributaria (SAT).',
      tags: ['Spring Boot', 'PostgreSQL', 'Oracle', 'Angular', 'Docker', 'AWS', 'Alfresco'],
      link: '#'
    }
  ];

  protected openProjectModal(project: Project): void {
    this.isProjectModalClosing = false;
    this.selectedProject = project;
  }

  protected closeProjectModal(): void {
    if (!this.selectedProject || this.isProjectModalClosing) {
      return;
    }

    this.isProjectModalClosing = true;
  }

  protected finishProjectModalClose(event: AnimationEvent): void {
    if (event.target !== event.currentTarget || !this.isProjectModalClosing) {
      return;
    }

    this.selectedProject = null;
    this.isProjectModalClosing = false;
  }

  @HostListener('document:keydown.escape')
  protected closeModalOnEscape(): void {
    this.closeProjectModal();
  }
}
