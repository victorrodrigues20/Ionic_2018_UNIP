import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-livro-list',
    templateUrl: 'livro-list.html'
})
export class LivroListPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ id: number, titulo: string, ano: number }>;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.items = [];
        this.items.push({ id: 1, titulo: "Livro 1", ano: 2017 });
    }
    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(LivroListPage, {
            item: item
        });
    }
}