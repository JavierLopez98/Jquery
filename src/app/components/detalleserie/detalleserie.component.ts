import { Component, OnInit } from '@angular/core';
import {Serie} from './../../models/serie';
import {SerieService} from './../../service/serie.service';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-detalleserie',
  templateUrl: './detalleserie.component.html',
  styleUrls: ['./detalleserie.component.css']
})
export class DetalleserieComponent implements OnInit {

  public serie:Serie;

  constructor(
    private _service:SerieService,
    private _activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var id=params.id;
      this.getDetalles(id);
      
    })
  }

  getDetalles(id){
    this._service.getDetalles(id).subscribe(response=>{
      this.serie=response;
      console.log(response);
    },error=>{
      console.log("error en la lectura de los detalles")
    })
  }

}
