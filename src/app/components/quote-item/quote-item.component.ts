import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonButton],
})
export class QuoteItemComponent {
  @Input() text: string = '';
  @Input() author: string = '';
  @Output() onDelete = new EventEmitter<void>();

  constructor() {}
}
