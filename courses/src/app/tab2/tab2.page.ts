import { Component } from '@angular/core';
import {Validators,FormBuilder, Form, FormGroup} from '@angular/forms';
import { RessourceService } from '../services/ressource.service';
import { AlertController } from '@ionic/angular';

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
  "entities" : ['entities'],
  "liquid"  : ['cl', 'L', 'ml', 'dl', 'galon'],
  "mass" : ['cg', 'mg', 'g', 'Kg', 'dg']
  
  }
  constructor(private formBuilder: FormBuilder, private service : RessourceService, public alertController: AlertController) {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      quantity: ['', Validators.required],
      unity: ['', Validators.required],
      user: ['']
    });

    
  }

  

  addRessource(form){
    
    
    let ressource = form.value;
    console.log(ressource)
    if( ressource['quantity'] == ''  || ressource['name'] == '' ){
      if(ressource['name'] == '' ){
        this.refreshAlert('Erreur','Un nom doit être selectionné');
      }
      else if(ressource['quantity'] == '' ){
        this.refreshAlert('Erreur','Une quantité doit être selectionné');
      }
      
    }
    else {
      this.loading = true;
      if(ressource['unity'] = ''){
        ressource['unity'] = 'entites';
      }
      this.service.add(ressource).subscribe(data => {
      
      }, error => {
        console.log(error);
        });
       
       this.loading=false;
    }
   
      
      
     
  }
  async refreshAlert(header,message) {
    const alert = await this.alertController.create({
      cssClass: 'refresh',
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  

  segmentChanged(ev: any ) {
    
    
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
