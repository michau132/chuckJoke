import { Component, OnInit, OnDestroy } from '@angular/core';

import { JokeService } from '../core/services/joke.service';
import { IJoke } from '../core/models/IDetail.model';
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

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getAnotherJoke();
  }

  getAnotherJoke(): void {
    this.isLoading = true;
    this.jokeSubs = this.jokeService.getJoke().subscribe(
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
