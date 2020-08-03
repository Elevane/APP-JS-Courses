import { Component } from '@angular/core';
import {Validators,FormBuilder, Form, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  form: FormGroup;
  unity = [];
  cent = [];
 
  unities = {
  "entities" : this.getCentArray(),
  "liquid"  : ['cl', 'L', 'ml', 'dl', 'galon'],
  "mass" : ['cg', 'mg', 'g', 'Kg', 'dg']
  
  }
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
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
  logForm(form){
    console.log(form.value)
  }

  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    
    this.unity = [];
    this.unities[ev.detail.value].forEach(element => {
      this.unity.push(element);
    });
    //this.unity.push(this.unities[ev.detail.value]);
    
    console.log(this.unities[ev.detail.value]);
    
  }
  

}
