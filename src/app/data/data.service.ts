import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public messages: Array<Message>;
  constructor(private httpService: HttpClient) { }

  public getMails():any {
    return this.httpService.get('./assets/data.json');
  }
}