import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

getRating(Rating, cakeID){
  return this._http.post('/api/cake/:id' + cakeID, Rating);
}

makeNewCake(cake){
  return this._http.post('/api/cake', cake);
}
  constructor(private _http: HttpClient) { }

getAllCakes(){
  return this._http.get('/api/cake');
}

getOneCake(id){
  return this._http.get('/api/cake/'+id)
}

deleteOneCake(id){
  return this._http.delete('/api/cake/'+id)
}

updateOneCake(id, cake){
  return this._http.put('/api/cake/'+id, cake)
}

createReview(id, review){
  return this._http.patch('/api/cake/'+id, review)
}

}
