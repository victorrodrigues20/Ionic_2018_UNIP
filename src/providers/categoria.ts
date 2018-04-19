import { Injectable } from '@angular/core';
import { ILivro } from "../interfaces/ILivro";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ICategoria } from '../interfaces/ICategoria';

@Injectable()
export class CategoriaProvider {

  private apiUrl = "http://localhost:3014/api/v1";

  constructor(public http: Http) {
  }

  getCategorias() : any {

    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/categorias').map(res => res.json())
        .subscribe(dados => { resolve(dados); });
    }).catch(function(e) {
      console.log("Passei no erro");
    });

  }

}