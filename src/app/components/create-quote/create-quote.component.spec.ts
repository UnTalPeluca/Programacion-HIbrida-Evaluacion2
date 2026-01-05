import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateQuoteComponent } from './create-quote.component';

describe('CreateQuoteComponent', () => {
  let component: CreateQuoteComponent;
  let fixture: ComponentFixture<CreateQuoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CreateQuoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
