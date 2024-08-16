import { Component, Input } from '@angular/core';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Movie } from '../../interfaces/movie';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MovieListComponent,MovieListComponent,FormsModule,ReactiveFormsModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  name:string=''
  searchTerm = new FormControl('');
  
nameMovie($event: Movie){
this.name=$event.title
}
}
