import { Component } from '@angular/core';
import {HttpService}from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  newCake: any;
  allCakes: any;
  selectedCake: any;
  newReview: any;
  resetCake: any;
  cakeToReview: any;

constructor(private _httpService: HttpService) { 
  this.newCake={
    'bakerName': null,
    'imgUrl' : null
  }
  this.resetCake={
    bakerName:null,
    imgUrl:null
  }

  this.getCakes();

  this.newReview={
    stars:null,
    comment:null
  }
}
leaveReview(){
  const obs= this._httpService.createReview(this.cakeToReview._id, this.newReview)
  obs.subscribe(data => {
    console.log(data);
  })
}

createCake() {
  const obs = this._httpService.makeNewCake(this.newCake);
  obs.subscribe(data => {
    console.log(data);
    });
}

getCakes(){
  const obs = this._httpService.getAllCakes();
  obs.subscribe(data => {
    if(data['msg']=='success'){
      this.allCakes = data['info'];
    }
    })
  }

  getACake(id){
    const obs= this._httpService.getOneCake(id);
    obs.subscribe(data=>{
      this.selectedCake = data['info'];
    })
  }

  deleteACake(id){
    const obs= this._httpService.deleteOneCake(id);
    obs.subscribe(data=>{
      this.selectedCake = data['info'];
      console.log(data)
    })
  }

  // updateACake(id){
  //   const obs= this._httpService.updateOneCake(id);
  //   obs.subscribe(data=>{
  //     this.selectedCake = data['info'];
  //     console.log(data)
  //   })
  // }

  // resetCake(){
  //   'bakerName': null,
  //   'imgUrl' : null
  // }






}
