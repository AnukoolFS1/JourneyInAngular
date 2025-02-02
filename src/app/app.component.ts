import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { WishItems } from '../shared/models/Wishitems';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [new WishItems("Learn Angular"), new WishItems("Learn Typescript")]
  title = 'wishlisting';

  // constructor(private titleService: Title) {
  //   this.titleService.setTitle('Learning the Angular'); // Set the initial page title
  // }
}