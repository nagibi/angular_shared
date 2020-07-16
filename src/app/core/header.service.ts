import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _header = new Subject<any[]>();
  readonly headerSubject = this._header.asObservable();

  constructor() { }

  criarMenu(){
    this._header.next(['opcao 01','opcao 02','opcao 03']);
  }

}
