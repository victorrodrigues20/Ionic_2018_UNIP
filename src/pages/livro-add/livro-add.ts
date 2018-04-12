import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LivroProvider } from "../../providers/livro";
import { ILivro } from "../../interfaces/ILivro";

import { AutorProvider } from "../../providers/autor";
import { LivroAutorProvider } from "../../providers/livro-autor";

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

  livro: ILivro;
  modoEdicao: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public livroProvider: LivroProvider,
    public alertCtrl: AlertController, public autorProvider: AutorProvider,
    public livroAutorProvider: LivroAutorProvider) {

    this.livro = navParams.get("item");

    if (this.livro == null) {
      this.modoEdicao = false;
      this.livro = this.livroProvider.getInstancia();
    }
    else
      this.modoEdicao = true;

  }

  salvar(evento) {
    if (!this.modoEdicao)
      this.livroProvider.adicionarLivro(this.livro);
    else
      this.livroProvider.alterarLivro(this.livro);

    this.navCtrl.pop();
  }


  cancelar() {
    this.navCtrl.pop();
  }


  gerenciarAutores() {

    let autores = this.autorProvider.getAutores();

    let livrosAutores =
      this.livroAutorProvider.getLivrosAutores(this.livro);

    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione os Autores:');

    for (let i = 0; i < autores.length; i++) {
      //livrosAutores
      let possuiAutor: boolean = livrosAutores.some((a) => {
        if (a.autorId == autores[i].id) {
          return true;
        }
        return false;
      });

      alert.addInput({
        type: 'checkbox',
        label: autores[i].nome,
        value: autores[i].id.toString(),
        checked: possuiAutor
      });
    }
    
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Salvar',
      handler: data => {
        this.livroAutorProvider.adicionarLivroAutor(this.livro, data);
      }
    });
    alert.present();
  }

}

