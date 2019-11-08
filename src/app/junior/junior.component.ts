import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from '../app.service';
import { IJoke } from '../IDetail.model';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './junior.component.html',
  styleUrls: ['./junior.component.css']
})
export class JuniorComponent implements OnInit, OnDestroy {

  joke: IJoke;
  isLoading: boolean;
  likedJokes: string[] = [];
  jokeSubs: Subscription;

  constructor(private appService: AppService) { }

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

  likeJoke(joke: string): void {
    this.likedJokes = [...this.likedJokes, joke];
    this.getAnotherJoke();
  }

  ngOnDestroy(): void {
    this.jokeSubs.unsubscribe();
  }
}
