import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import {ILivro} from "../../interfaces/ILivro";
import {LivroAddPage} from "../livro-add/livro-add";
import {LivroProvider} from "../../providers/livro";

/**
 * Generated class for the LivroDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livro-details',
  templateUrl: 'livro-details.html',
})
export class LivroDetailsPage {

  livro : ILivro;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public livroProvider:LivroProvider) {
    this.livro = navParams.get('item');
  }

  editarItem (event){
    this.navCtrl.push(LivroAddPage, {
      item : this.livro
    });
  }

  removerItem (event) {

    let confirmar = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja excluir esse registro?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.livroProvider.removerLivro(this.livro);
            this.navCtrl.pop();
          }
        }
      ]
    });

    confirmar.present();
  }

}

