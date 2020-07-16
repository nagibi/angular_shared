import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _header = new ReplaySubject<any[]>();
  readonly headerSubject = this._header.asObservable();

  constructor() { }

  criarMenu(){
    debugger
    this._header.next(['opcao 01','opcao 02','opcao 03']);
  }

}
