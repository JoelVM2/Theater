import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { ListMovies } from "../../components/list-movies/list-movies";

@Component({
  selector: 'app-list',
  imports: [Header, ListMovies],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
movieService: any;

}
