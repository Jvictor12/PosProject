import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

  constructor() { }
  autorizar(){
    localStorage.setItem('login', 'sim')
  }
  deslogar(){
    localStorage.clear()
  }

  obterLoginStatus = () => !!localStorage.getItem('login') 
}
