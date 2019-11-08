import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

import { IJoke } from '../models/IDetail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getJoke(id: string = 'random'): Observable<IJoke> {
    return this.http.get<IJoke>(`https://api.chucknorris.io/jokes/${id}`);
  }
}
