import { Injectable } from '@angular/core';
import { ILivro } from "../interfaces/ILivro";

@Injectable()
export class LivroProvider {

    private livros: ILivro[] = [];

    constructor() {
        if (this.livros.length == 0)
            this.popularLivros();
    }

    popularLivros() {
        //console.log("passei PopularLivros");
        this.livros.push({
            id: 1, titulo: "Livro 1", ano: 2017, img:
                "assets/capas/livro1.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 2", ano: 2016, img:
                "assets/capas/livro2.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 3", ano: 2015, img:
                "assets/capas/livro3.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 4", ano: 2016, img:
                "assets/capas/livro4.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 5", ano: 2016, img:
                "assets/capas/livro5.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 6", ano: 2013, img:
                "assets/capas/livro6.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 7", ano: 2010, img:
                "assets/capas/livro7.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 8", ano: 2017, img:
                "assets/capas/livro8.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 9", ano: 2012, img:
                "assets/capas/livro9.jpg"
        });
        this.livros.push({
            id: 1, titulo: "Livro 10", ano: 2015, img:
                "assets/capas/livro10.jpg"
        });
    }

    carregarLivros() {
    }

    getLivros(): ILivro[] {
        return this.livros;
    }

    adicionarLivro(livro: ILivro) {
        this.livros.push(livro);
    }

    removerLivro(livro: ILivro) {
        let position = this.livros.findIndex((l: ILivro) => {
            return l.id == livro.id;
        })
        this.livros.slice(position, 1);
    }

    alterarLivro(livro: ILivro) {
        let position = this.livros.findIndex((l: ILivro) => {
            return l.id == livro.id;
        })
        this.livros[position].titulo = livro.titulo;
        this.livros[position].ano = livro.ano;
        this.livros[position].img = livro.img;
    }
}