import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { DetalleserieComponent } from './components/detalleserie/detalleserie.component';
import { HomeComponent } from './components/home/home.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const appRoutes:Routes=[
    {path:"",component:HomeComponent},
    {path:"detalleserie/:id",component:DetalleserieComponent},
    {path:"personajesserie/:id",component:PersonajesComponent},
    {path:"nuevo",component:NuevoComponent},
    {path:"modificar",component:ModificarComponent}
    
    ]
    
    export const appRoutingProviders:any[]=[];
    export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);