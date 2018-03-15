import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivroDetailsPage } from './livro-details';

@NgModule({
  declarations: [
    LivroDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LivroDetailsPage),
  ],
})
export class LivroDetailsPageModule {}
