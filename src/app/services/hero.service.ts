import { Injectable } from '@angular/core';
import { Hero } from '../models';
import { HEROES } from '../mocks';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
