import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { HomeResume } from "../../components/home-resume/home-resume";

@Component({
  selector: 'app-home',
  imports: [Header, HomeResume],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
