import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { SerieService } from 'src/app/service/serie.service';
import {Personajes} from './../../models/personajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes:Array<Personajes>;

  constructor(private _service:SerieService,
    private _activeRoute:ActivatedRoute) {
      this.personajes=[]
     }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
     var id=params.id;
      this.getPersonajes(id);
    })
  }

  getPersonajes(id){
    this._service.getPersonajes(id).subscribe(response=>{
      this.personajes=response;
      console.log(response);
    },error=>{
      console.log("error al leer los personajes");
    })
  }

}
