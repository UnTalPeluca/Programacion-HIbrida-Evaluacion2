import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class CreateQuoteComponent {
  newQuote: string = '';
  newAuthor: string = '';

  @Output() onCreate = new EventEmitter<{ quote: string; author: string }>();

  add() {
    if (this.newQuote.length >= 5 && this.newAuthor.length >= 2) {
      this.onCreate.emit({ quote: this.newQuote, author: this.newAuthor });
      this.newQuote = '';
      this.newAuthor = '';
    }
  }
}
