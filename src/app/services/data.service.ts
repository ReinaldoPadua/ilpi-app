import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public messages: any[] = [
    {
      fromName: 'Sr. Fulano',
      subject: 'Nova notificação: Hora do medicamento.',
      date: '9:32 AM',
      id: 0,
      read: false,
    },
  ];

  constructor() {}

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
