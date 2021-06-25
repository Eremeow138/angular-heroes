import { Component } from '@angular/core';
import { HEROES } from '../mocks/mock-heroes';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
