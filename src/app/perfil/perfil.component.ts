import { Component, OnInit } from '@angular/core';
import {  HeaderService } from '../core/header.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private _headerService:HeaderService) { }

  ngOnInit() {
    this._headerService.criarMenu();
  }

}
