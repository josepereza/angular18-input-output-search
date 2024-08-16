import { Injectable, signal } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  private movies:Movie[]=[
    {id:1, title:'Inception',year:2009},
    {id:2, title:'Jurisic Park 1', year:2008},
    {id:3, title:'The Jurisic Park 2', year:2011},
    {id:4, title:'Jurisic Park 3', year:2016},
    {id:5, title:'8 seven', year:2007}

  ]
  getMoviesSignal=signal(this.movies)
  getMovies():Observable<Movie[]>{
    return of(this.movies);
  }
}
