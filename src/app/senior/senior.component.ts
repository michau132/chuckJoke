import { Component, OnInit } from '@angular/core';
import { IJoke } from '../IDetail.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './senior.component.html',
  styleUrls: ['./senior.component.css']
})
export class SeniorComponent implements OnInit {
  joke: IJoke;
  isLoading: boolean;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

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

  likeJoke(): void {
    this.router.navigate(['/senior/' + this.joke.id]);
  }
}
