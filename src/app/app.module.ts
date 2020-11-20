import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {routing,appRoutingProviders} from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

import { SerieService } from './service/serie.service';
import {HttpClientModule} from '@angular/common/http';
import { DetalleserieComponent } from './components/detalleserie/detalleserie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { ModificarComponent } from './components/modificar/modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetalleserieComponent,
    PersonajesComponent,
    NuevoComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProviders,SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
