import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotosFacade } from './services/photos.facade';

@Component({
  imports: [
    RouterModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    PhotosFacade
  ]
})
export class AppComponent {
  title = 'angular-anti-corruption-pattern';
}
