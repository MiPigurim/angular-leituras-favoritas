import { Component, input } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { LiteraryGenre } from '../book/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literaly-genre',
  imports: [BookComponent, CommonModule],
  templateUrl: './literaly-genre.component.html',
  styleUrl: './literaly-genre.component.css',
})
export class LiteralyGenreComponent {
  genero = input.required<LiteraryGenre>();
}
