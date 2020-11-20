import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { Serie } from 'src/app/models/serie';
import {Router} from '@angular/router';
import {SerieService} from './../../service/serie.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  public series:Array<Serie>;
  public personajes:Array<Personajes>
  public serie:Serie;
  public personaje:Personajes;

  constructor(
    private _service:SerieService,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this.cargaPjs();
    this.cargaSeries();
  }

  cargaSeries(){
    this._service.getSeries().subscribe(response=>{
      this.series=response;
    },error=>{
      console.log("error en la lecura de series");
    })
  }
  cargaPjs(){
    this._service.getPjs().subscribe(response=>{
      this.personajes=response;
    },error=>{
      console.log("error en la lecura de personajes");
    })
  }

  serieChange(event){
      this.cargaSerie(parseInt(event.target.value));
  }
  pjChange(event){
    this.cargaPj(parseInt(event.target.value));
  }

  cargaPj(idp){
this._service.getPj(idp).subscribe(response=>{
  this.personaje=response;
},error=>{
  console.log("error al cargar el personaje");
})
  }
  cargaSerie(ids){
    this._service.getDetalles(ids).subscribe(response=>{
      this.serie=response;
    },error=>{
      console.log("error al cargar la serie");
    })
  }

  modificar(){
    var idp=this.personaje.idPersonaje;
    var nom=this.personaje.nombre;
    var img=this.personaje.imagen;
    var ids=this.serie.idSerie;

    var pj=new Personajes(idp,nom,img,ids);


    this._service.updatePj(pj).subscribe(response=>{
      this._router.navigate(["/"]);
    },error=>{
      console.log("error al modificar el personaje")
    })
  }

}
