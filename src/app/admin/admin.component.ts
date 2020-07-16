import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../components/header.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _headerService:HeaderService) { }

  ngOnInit() {
    // this._headerService.criarMenu();
  }


}
