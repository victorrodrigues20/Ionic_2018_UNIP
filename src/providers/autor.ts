import { Injectable } from '@angular/core';
import { IAutor } from "../interfaces/IAutor";

@Injectable()

export class AutorProvider {
  private autores: IAutor[] = [];
  constructor() {
    if (this.autores.length == 0)
      this.popularAutores();
  }

  popularAutores() {
    this.autores.push({ id: 1, nome: "Mario Quintana" });
    this.autores.push({ id: 2, nome: "Luís de Camões" });
    this.autores.push({ id: 3, nome: "Machado de Assis" });
    this.autores.push({ id: 4, nome: "Albert Einstein" });
    this.autores.push({ id: 5, nome: "Gloria Hurtado" });
    this.autores.push({ id: 6, nome: "Amyr Klink" });
    this.autores.push({ id: 7, nome: "Nemo Nox" });
    this.autores.push({ id: 8, nome: "Leon Tolstói" });
    this.autores.push({ id: 9, nome: "Khalil Gibran" });
    this.autores.push({ id: 10, nome: "Elbert Hubbard" });
  }
  getInstancia(): IAutor {
    return {
      id: 0,
      nome: ""
    };
  }

  getAutores(): IAutor[] {
    return this.autores;
  }

  adicionarAutor(autor: IAutor) {
    if (autor.id == 0)
      autor.id = this.getNextID();
    this.autores.push(autor);
  }

  removerAutor(autor: IAutor) {
    let position = this.autores.findIndex((l: IAutor) => {
      return l.id == autor.id;
    });
    this.autores.splice(position, 1);
  }

  private getNextID(): number {
    let nextId = 0;
    if (this.autores.length > 0) {
      nextId = Math.max.apply(
        Math, this.autores.map(function (o) { return o.id; })
      );
    }
    return ++nextId;
  }
  
  alterarAutor(autor: IAutor) {
    console.log(this.autores);
    let position = this.autores.findIndex((l: IAutor) => {
      return l.id == autor.id;
    })
    this.autores[position].nome = autor.nome;
  }
}