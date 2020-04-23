import { Component, OnInit } from '@angular/core';
import { AccesoDatosService} from '../../services/acceso-datos.service';
import { Articulo } from '../../modelo/articulo'
import { NgForm  }  from '@angular/forms';
import {  LogicaNegocioComponent } from "../logica-negocio/logica-negocio.component";
import { LogicaNegocioService } from '../logica-negocio/logica-negocio.service';
@Component({
  selector: 'app-interfaz-usuario',
  templateUrl: './interfaz-usuario.component.html',
  styleUrls: ['./interfaz-usuario.component.css']
})
export class InterfazUsuarioComponent implements OnInit {
  articulo = {} as Articulo;
  constructor(public logicaNegocioService:LogicaNegocioService ) { }

  ngOnInit() {
  }

   parametroAdd(){
     this.logicaNegocioService.addArticulo(this.articulo);
     console.log(this.articulo);
      this.articulo = {} as Articulo;

   }

}
