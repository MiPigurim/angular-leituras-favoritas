export interface Book {
  titulo: string;
  autoria: string;
  imagem: string;
  favorito: boolean;
  genero: LiteraryGenre;
}

export interface LiteraryGenre {
  id: string;
  value: string;
  livros: Book[];
}
