import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
} from '@ionic/angular/standalone';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = 'Citas';
  isHome = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      const url = event.urlAfterRedirects;
      
      if (url.includes('home')) {
        this.title = 'Citas';
        this.isHome = true;
        return;
      }
      if (url.includes('gestion')) {
        this.title = 'Gestión de citas';
        this.isHome = false;
        return;
      }
      if (url.includes('configuraciones')) {
        this.title = 'Configuraciones';
        this.isHome = false;
        return;
      }
    });
  }
}
