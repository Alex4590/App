import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb(): object {
    const heroes = [
      {id: 2, name: 'Storm'},
      {id: 3, name: 'Alexsandr'},
      {id: 4, name: 'Blak star'},
      {id: 5, name: 'White star'},
      {id: 6, name: 'Oxxy star'},
      {id: 7, name: 'I star'}
    ];

    return {heroes};
  }
}
