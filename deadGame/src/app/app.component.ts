import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,CommonModule, HousingLocationComponent],
  styleUrl: './app.component.css',
  template: `
  <main>
    <header>
    <img src="./assets/l"/>
    <h1>DeadGame</h1>
    <app-home></app-home>
    </header>
    <section>
      <form>
        <input type="text" placeholder="Enter game name">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  </main>
  `
})
export class AppComponent {
  title = 'deadGame';

}
