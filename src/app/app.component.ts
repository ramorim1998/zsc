import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styles: [`
    nav {
      display: flex;
      justify-content: space-around;
      margin: 1rem;
      background: #222;
      color: white;
      padding: 1rem;
      border-radius: 5px;
    }
    nav a {
      text-decoration: none;
      color: white;
    }
    nav a:hover {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}
