import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { AppService } from './app.service';
import { IJoke } from './IDetail.model';

@Injectable()
export class JokeResolverService implements Resolve<IJoke> {

  constructor(private appService: AppService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.appService.getJoke(route.paramMap.get('id'));
  }
}
