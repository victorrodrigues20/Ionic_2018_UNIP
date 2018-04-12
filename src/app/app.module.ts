import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LivroListPage } from '../pages/livro-list/livro-list';
import { LivroAddPage } from "../pages/livro-add/livro-add";
import { LivroDetailsPage } from "../pages/livro-details/livro-details";
import { AnimacoesPage } from '../pages/animacoes/animacoes';

import { LivroProvider } from "../providers/livro";
import { AutorProvider } from '../providers/autor';
import { LivroAutorProvider } from '../providers/livro-autor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AnimatesDirective, AnimationService} from "css-animator";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    AnimacoesPage,
    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    AnimacoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider,
    AnimationService,
    AutorProvider,
    LivroAutorProvider
  ]
})
export class AppModule {}
