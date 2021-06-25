import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../mocks';
import { Hero } from '../models';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
