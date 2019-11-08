import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { IJoke } from '../core/models/IDetail.model';
import { AppService } from '../core/services/app.service';

@Component({
  templateUrl: './senior.component.html',
  styleUrls: ['./senior.component.css']
})
export class SeniorComponent implements OnInit, OnDestroy {
  joke: IJoke;
  isLoading: boolean;
  jokeSubs: Subscription;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAnotherJoke();
  }

  getAnotherJoke(): void {
    this.isLoading = true;
    this.jokeSubs = this.appService.getJoke().subscribe(
      (data: IJoke) => {
        this.joke = data;
        this.isLoading = false;
      },
      (err) => {
        console.log('Error', err);
      }
    );
  }

  likeJoke(): void {
    this.router.navigate(['/senior/' + this.joke.id]);
  }

  ngOnDestroy(): void {
    this.jokeSubs.unsubscribe();
  }
}
