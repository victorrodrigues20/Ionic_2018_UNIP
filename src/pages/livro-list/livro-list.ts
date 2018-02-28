import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-livro-list',
    templateUrl: 'livro-list.html'
})
export class LivroListPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ id: number, titulo: string, ano: number, img: string }>;
    itemsFilter: Array<{ id: number, titulo: string, ano: number, img: string }>;
    pesquisa: string;
    visibilidade: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.items = [];
        this.items.push({id : 1, titulo : "Livro 1", ano : 2017, img : "assets/capas/livro1.jpg" });
        this.items.push({id : 1, titulo : "Livro 2", ano : 2016, img : "assets/capas/livro2.jpg" });
        this.items.push({id : 1, titulo : "Livro 3", ano : 2015, img : "assets/capas/livro3.jpg" });
        this.items.push({id : 1, titulo : "Livro 4", ano : 2016, img : "assets/capas/livro4.jpg" });
        this.items.push({id : 1, titulo : "Livro 5", ano : 2016, img : "assets/capas/livro5.jpg" });
        this.items.push({id : 1, titulo : "Livro 6", ano : 2013, img : "assets/capas/livro6.jpg" });
        this.items.push({id : 1, titulo : "Livro 7", ano : 2010, img : "assets/capas/livro7.jpg" });
        this.items.push({id : 1, titulo : "Livro 8", ano : 2017, img : "assets/capas/livro8.jpg" });
        this.items.push({id : 1, titulo : "Livro 9", ano : 2012, img : "assets/capas/livro9.jpg" });
        this.items.push({id : 1, titulo : "Livro 10", ano : 2015, img : "assets/capas/livro10.jpg" });
        
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