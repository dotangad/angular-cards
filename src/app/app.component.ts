import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Card } from 'src/card';
import { CardsDataService } from './cards-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cards';
  cards$?: Observable<Card[]>;

  constructor(public cardsData: CardsDataService) {}

  ngOnInit() {
    this.cards$ = this.cardsData.getCards();
  }
}
