import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivroAddPage } from './livro-add';

@NgModule({
  declarations: [
    LivroAddPage,
  ],
  imports: [
    IonicPageModule.forChild(LivroAddPage),
  ],
})
export class LivroAddPageModule {}
