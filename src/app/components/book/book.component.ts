import { Component, input } from '@angular/core';
import { Book } from './book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  livro = input.required<Book>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
