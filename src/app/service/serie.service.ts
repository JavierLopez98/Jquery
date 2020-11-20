import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';
import {Serie} from './../models/serie';
import {Personajes} from './../models/personajes';
@Injectable()
export class SerieService{
    private url:string
    constructor(private _http:HttpClient) {
        this.url=Global.urlserie;
    }

    getSeries():Observable<any>{
        var request="/api/series";
        return this._http.get(this.url+request);
    }

    getDetalles(id):Observable<any>{
        var request="/api/series/"+id;
        return this._http.get(this.url+request);
    }

     getPersonajes(id):Observable<any>{
         console.log(id);
         var request="/api/Series/PersonajesSerie/"+id;
       return this._http.get(this.url+request);
     }

     insertPj(pj:Personajes):Observable<any>{
         console.log(pj);
         var json=JSON.stringify(pj);
         var header=new HttpHeaders().set("Content-Type","application/json");
         var request="/api/Personajes";
         return this._http.post(this.url+request,json,{headers:header});
     }

     updatePj(pj:Personajes):Observable<any>{
        var request="/api/personajes";
        var json=JSON.stringify(pj);
        var header=new HttpHeaders().set("Content-Type","application/json");
        return this._http.put(this.url+request,json,{headers:header})
        
     }

     getPjs():Observable<any>{
         var request="/api/personajes";
         return this._http.get(this.url+request);
     }

     getPj(id):Observable<any>{
         var request="/api/personajes/"+id;
         return this._http.get(this.url+request);
     }
}