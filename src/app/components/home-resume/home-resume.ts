import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';

@Component({
  selector: 'app-home-resume',
  templateUrl: './home-resume.html',
  styleUrls: ['./home-resume.css']
})
export class HomeResume {
  totalMovies = 0;
  topMovies: any[] = [];

  constructor(public movieService: MovieService) {
    this.loadSummary();
  }

  // Cambia el atributo de destacado
  toggleFeatured(movie: any) {
    movie.featured = !movie.featured;
    this.updateTopMovies();
  }

  loadSummary() {
    this.totalMovies = this.movieService.movies.length;
    this.updateTopMovies();
  }
  
  // Actualiza las películas por el destacadol.
  private updateTopMovies() {
    this.topMovies = this.movieService.movies.filter(movie => movie.featured);
  }

}
