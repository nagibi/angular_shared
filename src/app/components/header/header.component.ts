import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data:any[]=[];

  constructor(private _headerService:HeaderService) { }

  ngOnInit() {
    this._headerService.headerSubject.subscribe(data=>{
      this.data = data;
    })
  }

}
