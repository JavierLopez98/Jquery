import { Component, OnInit } from '@angular/core';
import {SerieService} from './../../service/serie.service';
import {Router} from '@angular/router';
import {Serie} from './../../models/serie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series:Array<Serie>;

  constructor(private _service:SerieService
    ,private _router:Router) { }

  ngOnInit(): void {
    this.cargaSeries();
  }

  cargaSeries(){
    this._service.getSeries().subscribe(response=>{
      console.log(response);
     this.series=response;
    },error=>{
      console.log("error en la lectura de series");
    }
    )
  }

  detalleSerie(id){
    this._router.navigate(["detalleserie/",id])

  }

}
