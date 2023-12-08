import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { backgrounds } from './types/backgrounds';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public currentBackgroundURL:string = '';
  constructor(){}

  ngOnInit(): void {
      this.currentBackgroundURL = backgrounds.waves['blue'];
  }
}
