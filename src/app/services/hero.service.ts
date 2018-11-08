import { Injectable } from '@angular/core';
import { Hero } from '../models';
import { HEROES } from '../mocks';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { MessagesService} from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messagesService: MessagesService ) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('Избранные герои');
    return of(HEROES);
  }
}
