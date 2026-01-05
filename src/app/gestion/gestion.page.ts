import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { QuoteItemComponent } from '../components/quote-item/quote-item.component';
import { CreateQuoteComponent } from '../components/create-quote/create-quote.component';
import { QuoteService, Quote } from '../services/quote.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    QuoteItemComponent,
    CreateQuoteComponent,
  ],
})
export class GestionPage implements OnInit {
  quotes: Quote[] = [];

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {}

  // Se ejecuta cada vez que entras a la pestaña [cite: 420]
  async ionViewWillEnter() {
    await this.loadQuotes();
  }

  async loadQuotes() {
    this.quotes = await this.quoteService.findAllQuotes();
  }

  // Para que el componente de creación guarde en la BD
  async handleCreate(newQuote: { quote: string; author: string }) {
    await this.quoteService.addQuote({
      text: newQuote.quote,
      author: newQuote.author,
    });
    await this.loadQuotes(); // Refrescar lista
  }
}
