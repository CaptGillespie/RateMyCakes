import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  newReview: any;
  @Input() cakeToReview: any;
  getRating: any;

  constructor(private _HttpService: HttpService) { 
    this.newReview={
      'stars':null,
      'comment':null
    }

  }
  ngOnInit() {
    this.getRating = {
      status: "",
      cakeID: "",
      message: { comment: "", rate: "" }
    }
  }
  
  postRating(Rating, cakeID) {
    let obs = this._HttpService.getRating(Rating, cakeID);
    obs.subscribe(data => {

      }
  }

}

