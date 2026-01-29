import { Component } from '@angular/core';
import { MovieForm } from "../../components/movie-form/movie-form";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-create',
  imports: [MovieForm, Header],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {

}
