import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Articulo } from '../modelo/articulo'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccesoDatosService {

  articuloCollection:AngularFirestoreCollection<Articulo>;
  articulo:Observable<Articulo[]>;

  private static singleton:AccesoDatosService;

    public getInstancia(){
    if(AccesoDatosService.singleton){
      AccesoDatosService.singleton=new AccesoDatosService();
      console.log("Ya esta instanciado");
    }
    console.log("Instanciando base de datos")
    return AccesoDatosService.singleton ;
  }


   private constructor(public db: AngularFirestore) {


    this.articuloCollection = this.db.collection('Articulo');
    this.articulo = this.articuloCollection.snapshotChanges().pipe(map(
      actions => {
      return actions.map(a => {
      const data = a.payload.doc.data() as Articulo;
      data.id = a.payload.doc.id;
      return data;
      })

    }));
  }

  addArticulo(articulo:Articulo){
    this.articuloCollection.add(articulo);
   }
}
