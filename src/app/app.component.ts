import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksListComponent } from './components/books-list/books-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, BooksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'organo';
}
