import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Personajes} from './../../models/personajes';
import {SerieService} from './../../service/serie.service';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Serie} from './../../models/serie';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  @ViewChild("cajanombre") cajanombre:ElementRef;
  @ViewChild("cajaimagen") cajaimagen:ElementRef;

  public series:Array<Serie>;

  public seleccionado:number;

  constructor(
    private _service:SerieService,
    private _router:Router,
    private _activeRoute:ActivatedRoute
  ) { 
    this.cajaimagen=ElementRef.prototype;
    this.cajanombre=ElementRef.prototype;
    this.series=[];
  }

  ngOnInit(): void {
    this.cargaSeries();
  }

  nuevo(){
    var idp=1;
    var nom=this.cajanombre.nativeElement.value;
    var img=this.cajaimagen.nativeElement.value;
    var ids=this.seleccionado;

    var pj=new Personajes(idp,nom,img,ids);
    this._service.insertPj(pj).subscribe(response=>{
      this._router.navigate(["/"]);
    },error=>{
      console.log("error en la insercion de personaje");
    })
  }

  selectChange(event){
    this.seleccionado=parseInt(event.target.value);
    console.log(this.seleccionado);
  }

  cargaSeries(){
    this._service.getSeries().subscribe(response=>{
      this.series=response;
    },error=>{
      console.log("error al cargar las series")
    })
  }
}
