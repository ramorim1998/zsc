import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./componentes/shared/navbar/navbar.component";
import { HistoryComponent } from './componentes/history/history.component';
import { HomeComponent } from './componentes/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    HomeComponent,
    HistoryComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


}
