import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HeaderComponent],
})
export class AppComponent implements OnInit {
  constructor(private quoteService: QuoteService) {}

  async ngOnInit() {
    try {
      await this.quoteService.initializePlugin();
      console.log('Base de datos inicializada correctamente');
    } catch (error) {
      console.error('Error al inicializar la base de datos:', error);
    }
  }
}
