import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges, computed, inject, input, output } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { transform } from 'typescript';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

// implements OnInit, OnChanges
export class MovieListComponent{
  //@Output() onMovieClick=new EventEmitter<Movie>
  //@Input() searchTerm!:string;

   onMovieClick=output<Movie>();
   searchTerm=input.required({
   transform:(value:string)=>value.toLocaleLowerCase(),
  alias:'searchInput'
  }
   );
  // movies:Movie[]=[];
  // filteredMovies:Movie[]=[]

  movieService=inject(MovieService)

  filteredMoviesSignal=computed(()=>this.movieService.getMoviesSignal()
  .filter(movie=>movie.title.toLocaleLowerCase().includes(this.searchTerm()))
  )

  handleMovieClick(movie: Movie){
    this.onMovieClick.emit(movie)

  }
 
  /* ngOnChanges(changes: SimpleChanges): void {
    console.log('cambios', changes['searchTerm'].currentValue)
if(changes['searhTerm'].currentValue){
  this.filteredMovies=this.movies.filter(movie=>
    movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.filteredMovies);
}


  //throw new Error('Method not implemented.');
  } */

 /*  ngOnInit(): void {

    this.movieService.getMovies().subscribe(movies=>{
      this.movies=movies;
      this.filteredMoviesSignal;
    })
    //throw new Error('Method not implemented.');
  } */


}
