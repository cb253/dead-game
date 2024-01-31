import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameCardsComponent } from './game-cards/game-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,CommonModule, GameCardsComponent],
  styleUrl: './app.component.css',
  template: `
  <main>
    <header>
    <h3>Welcome to</h3>
    <h1>DEAD GAME</h1>
    <p>Find data on all your favorite dying games!</p>
    <form target="_top">
      <input type="text" id="gameName" name="gameName" placeholder="Enter game name">
      <button type="button">Search</button>

    </form>

    <app-home></app-home>
    </header>
    <section class="results">
      <game-cards></game-cards>
    </section>
  </main>
  `
})
export class AppComponent {
  title = 'deadGame';

}
