import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { AppService } from 'src/app/app.service';
import { IJoke } from 'src/app/IDetail.model';

@Component({
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css']
})
export class JokeDetailsComponent implements OnInit {
  joke: IJoke;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      ({joke}: {joke: IJoke}) => {
        this.joke = this.appService.transformProperties(joke);
        console.log(this.joke);
      },
      (err) => {
        console.log('Error', err);
      }
    );
  }


}
