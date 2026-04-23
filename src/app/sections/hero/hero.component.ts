import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  protected readonly sectionLinks = [
    { 
      href: '#', 
      label: 'Home', 
      icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' 
    },
    { 
      href: '#about', 
      label: 'About', 
      icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z' 
    },
    { 
      href: '#skills', 
      label: 'Skills', 
      icon: 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' 
    },
    { 
      href: '#experience', 
      label: 'Experience', 
      icon: 'M2.25 13.5h3.86a2.25 2.25 0 0 1 2.008 1.24l.145.29a5.25 5.25 0 0 0 9.474 0l.145-.29a2.25 2.25 0 0 1 2.008-1.24h3.86m-21 1.406V6a2.25 2.25 0 0 1 2.25-2.25h19.5A2.25 2.25 0 0 1 22.5 6v10.5a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 16.5v-1.594Z' 
    },
    { 
      href: '#projects', 
      label: 'Projects', 
      icon: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5' 
    },
    { 
      href: '#education', 
      label: 'Education', 
      icon: 'M3.75 8.25 12 4.5l8.25 3.75L12 12 3.75 8.25Zm1.5 2.84v4.185c0 .429.229.826.6 1.039 3.936 2.265 8.814 2.265 12.75 0 .371-.213.6-.61.6-1.039V11.09'
    }
  ];
}
