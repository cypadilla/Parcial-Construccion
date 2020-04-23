import { Injectable } from '@angular/core';
import { AccesoDatosService} from '../../services/acceso-datos.service';
import { Articulo } from '../../modelo/articulo'
import { NgForm  }  from '@angular/forms';
import {InterfazUsuarioComponent} from'../interfaz-usuario/interfaz-usuario.component'
@Injectable({
  providedIn: 'root'
})
export class LogicaNegocioService {
  articulo = {} as Articulo;
   constructor(public accesoDatosService: AccesoDatosService) { }

   ngOnInit() {
   }
   addArticulo(articulo:Articulo){
     if(this.articulo.excento){
       this.articulo.iva=0;
     }
     else{
       this.articulo.iva=16;
     }
     this.accesoDatosService.addArticulo(this.articulo);
     console.log(this.articulo);
     this.articulo = {} as Articulo;
   }
}
