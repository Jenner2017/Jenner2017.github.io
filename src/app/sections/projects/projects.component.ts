import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

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
export class ProjectsComponent implements OnInit, OnDestroy {
  protected selectedProject: Project | null = null;
  protected isProjectModalClosing = false;
  protected isProjectCarouselTransitioning = false;
  protected isProjectCarouselResetting = false;
  protected projectCarouselDirection: 1 | -1 = 1;
  protected projectCarouselTransform = this.getCarouselTransform(-1);
  protected currentProjectIndex = 0;
  private readonly visibleProjectCount = 3;
  private readonly carouselDelay = 5000;
  private shouldRestartCarouselAfterTransition = false;
  private carouselInterval: ReturnType<typeof setInterval> | null = null;

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

  protected get visibleProjects(): Project[] {
    const visibleCount = Math.min(this.visibleProjectCount, this.projects.length);

    return Array.from({ length: visibleCount }, (_, index) => {
      return this.getProjectAt(this.currentProjectIndex + index);
    });
  }

  protected get carouselProjects(): Project[] {
    return [
      this.getProjectAt(this.currentProjectIndex - 1),
      ...this.visibleProjects,
      this.getProjectAt(this.currentProjectIndex + this.visibleProjectCount)
    ];
  }

  ngOnInit(): void {
    this.startProjectCarousel();
  }

  ngOnDestroy(): void {
    this.stopProjectCarousel();
  }

  protected showNextProjects(): void {
    this.moveProjectCarousel(1);
  }

  protected showPreviousProjects(): void {
    this.moveProjectCarousel(-1);
  }

  protected startProjectCarousel(): void {
    if (this.carouselInterval || this.selectedProject) {
      return;
    }

    this.carouselInterval = setInterval(() => {
      this.moveProjectCarousel(1, false);
    }, this.carouselDelay);
  }

  protected stopProjectCarousel(): void {
    if (!this.carouselInterval) {
      return;
    }

    clearInterval(this.carouselInterval);
    this.carouselInterval = null;
  }

  protected openProjectModal(project: Project): void {
    this.stopProjectCarousel();
    this.isProjectCarouselTransitioning = false;
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
    this.startProjectCarousel();
  }

  protected finishProjectCarouselTransition(event: TransitionEvent): void {
    if (event.target !== event.currentTarget || !this.isProjectCarouselTransitioning) {
      return;
    }

    this.currentProjectIndex = (this.currentProjectIndex + this.projectCarouselDirection + this.projects.length) % this.projects.length;
    this.isProjectCarouselTransitioning = false;
    this.isProjectCarouselResetting = true;
    this.projectCarouselTransform = this.getCarouselTransform(-1);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.isProjectCarouselResetting = false;

        if (this.shouldRestartCarouselAfterTransition) {
          this.shouldRestartCarouselAfterTransition = false;
          this.startProjectCarousel();
        }
      });
    });
  }

  @HostListener('document:keydown.escape')
  protected closeModalOnEscape(): void {
    this.closeProjectModal();
  }

  private moveProjectCarousel(direction: 1 | -1, shouldRestartCarousel = true): void {
    if (this.isProjectCarouselTransitioning) {
      return;
    }

    this.projectCarouselDirection = direction;
    this.isProjectCarouselTransitioning = true;
    this.shouldRestartCarouselAfterTransition = shouldRestartCarousel;
    this.projectCarouselTransform = this.getCarouselTransform(direction === 1 ? -2 : 0);

    if (shouldRestartCarousel) {
      this.stopProjectCarousel();
    }
  }

  private getProjectAt(index: number): Project {
    return this.projects[(index + this.projects.length) % this.projects.length];
  }

  private getCarouselTransform(offset: -2 | -1 | 0): string {
    if (offset === 0) {
      return 'translateX(0)';
    }

    return `translateX(calc(${Math.abs(offset)} * -1 * (var(--project-card-width) + var(--project-gap))))`;
  }
}
