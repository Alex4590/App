import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string[] = [];
  constructor() { }

  public add(item: string): void {
    this.messages.push(item);
  }

  public clear(): void {
    this.messages = [];
  }
}
