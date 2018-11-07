import { Component } from '@angular/core';
import { Hero } from '../../models/';
import { HEROES } from '../../mocks/';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes: Hero[] = HEROES;
  public selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
