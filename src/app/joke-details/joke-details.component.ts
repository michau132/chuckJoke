import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IJoke } from 'src/app/core/models/IDetail.model';

@Component({
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css']
})
export class JokeDetailsComponent implements OnInit {
  joke: IJoke;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      ({joke}: {joke: IJoke}) => {
        this.joke = joke;
      },
      (err) => {
        console.log('Error', err);
      }
    );
  }


}
