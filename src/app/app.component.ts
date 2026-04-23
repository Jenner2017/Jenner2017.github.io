import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'portfolio-site';
}
