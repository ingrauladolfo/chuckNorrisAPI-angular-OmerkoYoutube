import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Joke } from '../interfaces/joke';
@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private apiURL='https://api.chucknorris.io/jokes/'
  constructor(
    private http: HttpClient
  ) { }
  getRandomJoke(){
     return this.http.get<Joke>(this.apiURL + 'random');
  }
  getCategories(){
    return this.http.get<string[]>(this.apiURL + 'categories');
  }
  getCategoryJoke(category:string){
    return this.http.get<Joke>(this.apiURL + `random?category=${category}`);
  }
  getSearchJoke(searchTerm:string){
    return this.http.get<{result:Joke[], amount: number}>(this.apiURL + `search?query=${searchTerm}`);
  }
}
