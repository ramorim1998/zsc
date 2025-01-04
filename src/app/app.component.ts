import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/historia">História</a>
      <a routerLink="/agenda">Agenda</a>
      <a routerLink="/lancamentos">Lançamentos</a>
      <a routerLink="/banda">Banda</a>
      <a routerLink="/contato">Contato</a>
      <a routerLink="/loja">Loja</a>
    </nav>
    <router-outlet></router-outlet>
  `,
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
