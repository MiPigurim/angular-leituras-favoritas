import { Component, OnInit } from '@angular/core';
import { Book, LiteraryGenre } from '../book/book';
import { books } from '../../mock-books';
import { LiteralyGenreComponent } from '../literaly-genre/literaly-genre.component';

@Component({
  selector: 'app-books-list',
  imports: [LiteralyGenreComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css',
})
export class BooksListComponent implements OnInit {
  generos: LiteraryGenre[] = [];
  livrosPorGenero: Map<string, Book[]> = new Map();

  ngOnInit(): void {
    this.livrosPorGenero = new Map();

    books.forEach((book) => {
      const generoId = book.genero.id;

      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(book);
    });

    this.generos = [
      {
        id: 'romance',
        value: 'Romance',
        livros: this.livrosPorGenero.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get('fantasia') ?? [],
      },
      {
        id: 'ficcao',
        value: 'Ficção',
        livros: this.livrosPorGenero.get('ficcao') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'suspense',
        value: 'Suspense',
        livros: this.livrosPorGenero.get('suspense') ?? [],
      },
      {
        id: 'ficcao-distopica',
        value: 'Ficção distópica',
        livros: this.livrosPorGenero.get('ficcao-distopica') ?? [],
      },
      {
        id: 'horror',
        value: 'Horror',
        livros: this.livrosPorGenero.get('horror') ?? [],
      },
    ];

    console.log(this.livrosPorGenero);
  }
}
