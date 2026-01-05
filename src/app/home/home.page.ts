import { Component } from '@angular/core';
import { IonContent, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { QuoteComponent } from '../components/quote/quote.component';
import { RouterLink } from '@angular/router';
import { PreferencesService } from '../services/preferences.service';
import { QuoteService, Quote } from '../services/quote.service';
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
  randomQuote: Quote | null = null;

  constructor(
    private preferencesService: PreferencesService,
    private quoteService: QuoteService
  ) {}

  async ionViewWillEnter() {
    this.showDelete = await this.preferencesService.getDeleteInHome();

    const quotes = await this.quoteService.findAllQuotes();
    if (quotes.length > 0) {
      this.randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } else {
      this.randomQuote = null;
    }
  }

  async handleDelete() {
    if (this.randomQuote?.id) {
      await this.quoteService.deleteQuote(this.randomQuote.id);
      await this.ionViewWillEnter();
    }
  }
}