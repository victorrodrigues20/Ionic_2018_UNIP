import { Injectable } from '@angular/core';
import { ILivroAutor } from "../interfaces/ILivroAutor";
import { ILivro } from "../interfaces/ILivro";

@Injectable()
export class LivroAutorProvider {

  private livroAutores: ILivroAutor[] = [];

  constructor() {
  }

  getInstancia(): ILivroAutor {
    return {
      livroId: null,
      autorId: null
    };
  }

  getLivrosAutores(livro: ILivro): ILivroAutor[] {
    let itemsFilter = this.livroAutores.filter((i) => {
      if (i.livroId == livro.id) {
        return true;
      }
      return false;
    });
    return itemsFilter;
  }

  adicionarLivroAutor(livro: ILivro, autores: Array<string>) {
    this.removerLivroAutor(livro);
    for (let x = 0; x < autores.length; x++) {
      let novoItem = this.getInstancia();
      novoItem.livroId = livro.id;
      novoItem.autorId = parseInt(autores[x]);
      this.livroAutores.push(novoItem);
    }
  }

  removerLivroAutor(livro: ILivro) {
    let itemsFilter = this.livroAutores.filter((i) => {
      if (i.livroId != livro.id) {
        return true;
      }
      return false;
    });
    this.livroAutores = itemsFilter;
  }

  removerLivrosAutorVazio(livro: ILivro) {
    this.removerLivroAutor(null);
    
  }

}