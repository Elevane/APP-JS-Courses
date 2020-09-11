import { Component } from '@angular/core';
import {Validators,FormBuilder, Form, FormGroup} from '@angular/forms';
import { RessourceService } from '../services/ressource.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  form: FormGroup;
  unity = [];
  cent = [];
  private visible:boolean = false;
  private loading:boolean=false;
  private visibleNumber: boolean=false;
 
  unities = {
  "entities" : this.getCentArray(),
  "liquid"  : ['cl', 'L', 'ml', 'dl', 'galon'],
  "mass" : ['cg', 'mg', 'g', 'Kg', 'dg']
  
  }
  constructor(private formBuilder: FormBuilder, private service : RessourceService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      quantity: ['', Validators.required],
      unity: ['', Validators.required],
      user: ['']
    });

    
  }

  
  getCentArray(){
    for(let i = 0; i < 100; i++){
      this.cent.push(i);
    }
    return this.cent;
  }
  addRessource(form){
    console.log(form.value)
    this.loading = true;
    this.service.add().subscribe(data =>
      {
        
        this.res = data;
        for (const key in data) {
         this.res[key]["validate"] = true;
         this.res[key]["color"] = 'light';
        }
        this.res.sort(function(x, y) { return y.validate - x.validate })
        
       this.loading=false;
       console.log("qdqzd");
      },(error)=>{
       if(error.status == 0){
         console.log(error);
         this.error['header'] = "error";
         this.error['message'] = error.message
       }
       this.refreshAlert();
       this.loading=false;
      })
      
     
  }

  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    
    this.unity = [];
    this.unities[ev.detail.value].forEach(element => {
      this.unity.push(element);
    });
    //this.unity.push(this.unities[ev.detail.value]);
    
    console.log(this.unities[ev.detail.value]);
    if(ev.detail.value == "liquid" || ev.detail.value == "mass"){
      if(this.visible == false){
        this.visibleNumber=false;
        this.visible = true;
      }
     
    }
    else if(ev.detail.value== "entities"){
      if(this.visible){
        this.visible = false;
        this.visibleNumber = true;
      }
      if(this.visible == false){this.visibleNumber = true;}
      
    }
  }
  

}
