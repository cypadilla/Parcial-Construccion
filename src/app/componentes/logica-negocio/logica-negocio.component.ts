import { Component, OnInit } from '@angular/core';
import { AccesoDatosService} from '../../services/acceso-datos.service';
import { Articulo } from '../../modelo/articulo'
import { NgForm  }  from '@angular/forms';
import {InterfazUsuarioComponent} from'../interfaz-usuario/interfaz-usuario.component'
@Component({
  selector: 'app-logica-negocio',
  templateUrl: './logica-negocio.component.html',
  styleUrls: ['./logica-negocio.component.css']
})
export class LogicaNegocioComponent implements OnInit {
 articulo = {} as Articulo;
  constructor() { }

  ngOnInit() {
  }
}
