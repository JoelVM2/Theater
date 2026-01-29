import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Header } from "../header/header";

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule, Header],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css',
})
export class MovieForm {
  movieForm: FormGroup;

  name: FormControl;
  duration: FormControl;
  director: FormControl;
  image: FormControl;
  imdbUrl: FormControl;

  // Constructor del formulario, ponemos la validaciones, y creamos el formulario
  constructor(public movieService: MovieService) {
    this.name = new FormControl('',Validators.required);      
    this.duration = new FormControl('',[
      Validators.required,
      Validators.max(300)]);
    this.director = new FormControl('');

    this.image = new FormControl('',Validators.required);
    this.imdbUrl = new FormControl('',Validators.required);

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director,
      image: this.image,
      imdbUrl: this.imdbUrl
    });
  }

  // Manejo de la respuesta del formulario
  handleSubmit() {
    this.movieService.addMovie(this.movieForm.value);
    this.movieForm.reset();
  }
}
