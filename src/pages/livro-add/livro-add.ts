import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LivroProvider} from "../../providers/livro";
import {ILivro} from "../../interfaces/ILivro";

/**
 * Generated class for the LivroAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livro-add',
  templateUrl: 'livro-add.html',
})
export class LivroAddPage {

  livro:ILivro;
  modoEdicao : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public livroProvider:LivroProvider) {
    this.livro = navParams.get("item");

    if (this.livro == null) {
      this.modoEdicao = false;
      this.livro = this.livroProvider.getInstancia();
    }
    else
      this.modoEdicao = true;
  
  }

  salvar(evento){
    if (!this.modoEdicao)
      this.livroProvider.adicionarLivro(this.livro);
    else
      this.livroProvider.alterarLivro(this.livro);
  
    this.navCtrl.pop();
  }
  

  cancelar() {
    this.navCtrl.pop();
  }
}

