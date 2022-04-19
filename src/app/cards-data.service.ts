import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Card } from 'src/card';

@Injectable({
  providedIn: 'root',
})
export class CardsDataService {
  cards: Card[] = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today',
    },
  ];

  constructor() {}

  getCards(): Observable<Card[]> {
    return from([this.cards]);
  }
}
