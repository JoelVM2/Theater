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

  loadSummary() {
    this.totalMovies = this.movieService.movies.length;

    const movies = [...this.movieService.movies];
    this.shuffleArray(movies);
    this.topMovies = movies.slice(0, 2);
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
