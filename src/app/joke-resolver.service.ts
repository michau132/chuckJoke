import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AppService } from './app.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class JokeResolverService implements Resolve<any> {

  constructor(private appService: AppService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.appService.getJoke(route.paramMap.get('id'));
  }
}
