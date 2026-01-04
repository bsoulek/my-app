import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from "./playground/playground.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    HomeComponent,
    PlaygroundComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Sandbox';
}
