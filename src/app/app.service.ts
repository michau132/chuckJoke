import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

import { IJoke } from './IDetail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getJoke(id: string = 'random'): Observable<IJoke> {
    return this.http.get<IJoke>(`https://api.chucknorris.io/jokes/${id}`);
  }

  transformProperties(data: IJoke): IJoke {
    const newData: IJoke = {} as IJoke;
    for (const iterator of Object.keys(data)) {
      if (moment(data[iterator], 'YYYY-MM-DD hh:mm:ss.SSSSSS', true).isValid()) {
        newData[iterator] = moment(data[iterator]).format('DD-MM-YYYY, HH:MM:SS');
      } else if (typeof data[iterator] === 'string') {
        newData[iterator] = data[iterator].toUpperCase();
      } else if (Array.isArray(data[iterator]) && data[iterator].every(el => typeof el === 'string')) {
        newData[iterator] = data[iterator].map((el: string) => el.toUpperCase());
      } else {
        newData[iterator] = data[iterator];
      }
    }
    return newData;
  }
}
