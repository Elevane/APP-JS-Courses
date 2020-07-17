import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  url = 'http://localhost:5000/';
 
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
   })
  };
  constructor(private http: HttpClient, private loadingCtrl: LoadingController) { 

    
  }
  getAll(){
    return this.http.get(this.url+ "ressourceAll");
  }
  

 async delete(id){
    let loading =  await this.loadingCtrl.create({
      message: "Patientez...."
    });
     await loading.present();
    if(id){
      this.http.delete(this.url+ "objet/"+id).subscribe(res => {
        console.log('deleting : ' + id + "=> "+ res);
      }, err => {
        console.log(err);
        loading.dismiss();
        
      });;
    }
    
  }

}

