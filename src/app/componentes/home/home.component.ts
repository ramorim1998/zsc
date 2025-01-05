import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
