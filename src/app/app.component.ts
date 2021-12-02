import { Component, OnInit } from '@angular/core';
import { JokesService } from './services/jokes.service';
import { Joke } from './interfaces/joke';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jokes: Joke[] = [];
  categories: string[] = [];
  constructor(
    private jokesService:JokesService
  ){}
  ngOnInit() {
    this.jokesService.getCategories().subscribe((categories:string[])=>{
      this.categories = categories;
      this.jokesService.getRandomJoke().subscribe((joke:Joke)=>{
        this.jokes.push(joke);
      })
    })
  }
  searchbyCategory(category:string){
    this.jokesService.getCategoryJoke(category).subscribe((joke:Joke)=>{
      this.jokes =[];
      this.jokes.push(joke);
    })
  }
  searchbySearchTerm(searchTerm:string){
    if(searchTerm != ''){
      this.jokesService.getSearchJoke(searchTerm).subscribe(jokes=>{
        this.jokes=jokes.result;
      })
    }
  }
}
