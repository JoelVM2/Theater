import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies:Movie[];

  constructor(){
    this.movies=[
  {
    "name": "The Shawshank Redemption",
    "duration": 142,
    "director": "Frank Darabont",
    "image": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0111161/",
    "featured":true
  },
  {
    "name": "The Godfather",
    "duration": 175,
    "director": "Francis Ford Coppola",
    "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0068646/",
    "featured":false
  },
  {
    "name": "The Dark Knight",
    "duration": 152,
    "director": "Christopher Nolan",
    "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0468569/",
    "featured":true
  },
  {
    "name": "Pulp Fiction",
    "duration": 154,
    "director": "Quentin Tarantino",
    "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0110912/",
    "featured":false
  },
  {
    "name": "Forrest Gump",
    "duration": 142,
    "director": "Robert Zemeckis",
    "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0109830/",
    "featured":false
  },
  {
    "name": "Inception",
    "duration": 148,
    "director": "Christopher Nolan",
    "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt1375666/",
    "featured":false
  },
  {
    "name": "Fight Club",
    "duration": 139,
    "director": "David Fincher",
    "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0137523/",
    "featured":false
  },
  {
    "name": "Interstellar",
    "duration": 169,
    "director": "Christopher Nolan",
    "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0816692/",
    "featured":false
  },
  {
    "name": "The Matrix",
    "duration": 136,
    "director": "Lana Wachowski, Lilly Wachowski",
    "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0133093/",
    "featured":false
  },
  {
    "name": "Gladiator",
    "duration": 155,
    "director": "Ridley Scott",
    "image": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "imdbUrl": "https://www.imdb.com/title/tt0172495/",
    "featured":false
  }
]

  }
   addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}
