import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';

@Component({
  selector: 'app-list-movies',
  imports: [],
  templateUrl: './list-movies.html',
  styleUrl: './list-movies.css',
})
export class ListMovies {
constructor (public movieService: MovieService) {}

// Cambia el destadado
toggleFeatured(movie: any) {
  movie.featured = !movie.featured;
}

}
