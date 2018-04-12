import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimacoesPage } from './animacoes';

@NgModule({
  declarations: [
    AnimacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimacoesPage),
  ],
})
export class AnimacoesPageModule {}
