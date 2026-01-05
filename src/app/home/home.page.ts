import { Component } from '@angular/core';
import { IonContent, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { QuoteComponent } from '../components/quote/quote.component';
import { RouterLink } from '@angular/router';
import { PreferencesService } from '../services/preferences.service'; // Nombre solicitado
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonFab, IonFabButton, QuoteComponent, RouterLink, CommonModule],
})
export class HomePage {
  showDelete: boolean = true;

  constructor(private preferencesService: PreferencesService) {}

  async ionViewWillEnter() {
    this.showDelete = await this.preferencesService.getDeleteInHome();
  }
}