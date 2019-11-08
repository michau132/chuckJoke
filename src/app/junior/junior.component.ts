import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { IJoke } from '../IDetail.model';

@Component({
  templateUrl: './junior.component.html',
  styleUrls: ['./junior.component.css']
})
export class JuniorComponent implements OnInit {

  joke: IJoke;
  isLoading: boolean;
  likedJokes: string[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getAnotherJoke();
  }

  getAnotherJoke(): void {
    this.isLoading = true;
    this.appService.getJoke().subscribe(
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
}
