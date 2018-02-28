import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LivroProvider } from "../../providers/livro";
import { ILivro } from "../../interfaces/ILivro";

@Component({
    selector: 'page-livro-list',
    templateUrl: 'livro-list.html'
})
export class LivroListPage {
    selectedItem: any;
    icons: string[];
    items : Array<ILivro>;
    itemsFilter : Array<ILivro>;
    pesquisa: string;
    visibilidade: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, public livroProvider:LivroProvider) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        
        this.items = livroProvider.getLivros();
        // Aqui removemos todas as linhas de inserção de itens, já que agora
        // está dentro do método livroProvider.getLivros()

        this.itemsFilter = this.items;
        this.visibilidade = false;
    }

    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(LivroListPage, {
            item: item
        });
    }

    novoItem(event, item) {
        
    }

    abrirPesquisa(event) {
        this.visibilidade = true;
    }

    pesquisar(event) {
        this.itemsFilter = this.items.filter((i) => {
            if (i.titulo.indexOf(this.pesquisa) >= 0) {
              return true;
            }
            return false;
          })
    }

    cancelarPesquisa() {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    }
}