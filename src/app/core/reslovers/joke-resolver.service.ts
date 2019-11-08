import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { JokeService } from '../services/joke.service';
import { IJoke } from '../models/IDetail.model';

@Injectable()
export class JokeResolverService implements Resolve<IJoke> {

  constructor(private jokeService: JokeService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.jokeService.getJoke(route.paramMap.get('id'));
  }
}
