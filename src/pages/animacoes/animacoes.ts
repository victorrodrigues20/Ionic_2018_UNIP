import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {trigger, state, style, transition, animate } from "@angular/animations";
import { AnimationBuilder, AnimationService } from "css-animator";

/**
 * Generated class for the AnimacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animacoes',
  templateUrl: 'animacoes.html',
  animations: [
    trigger('meuEfeito', [
      state('estadoVisivel', style({
        opacity: 1
      })),
      state('estadoInvisivel', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ]

})
export class AnimacoesPage {

  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;

  estadoAnimacao = 'estadoVisible';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    animationService: AnimationService) {
    this.animator = animationService.builder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimacoesPage');
  }

  animarBotao() {
    this.animator.setType('pulse').show(this.myElem.nativeElement);
  }

  criarEfeito() {
    this.estadoAnimacao = (this.estadoAnimacao == 'estadoVisivel') ? 'estadoInvisivel' :  'estadoVisivel';
  }


}
