import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  imports: [IonCard, IonCardContent, IonButton, CommonModule],
  standalone: true,
})
export class QuoteComponent implements OnInit {
  @Input() text: string = '';
  @Input() author: string = '';
  @Input() canDelete: boolean = true;
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}
}
