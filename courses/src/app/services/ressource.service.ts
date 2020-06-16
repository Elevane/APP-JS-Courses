import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  url = 'http://localhost:5000/ressourceAll';
 

  constructor(private http: HttpClient) { 

    
  }
  getAll(){
    return this.http.get(this.url);
  }
 // getAll(){
    
    //return this.http.get("localhost:5000/ressourceAll",{headers: this.header});
  //}
}
