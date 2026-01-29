import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieForm } from './components/movie-form/movie-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Theater');
}
