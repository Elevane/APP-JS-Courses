import { Component } from '@angular/core';
import {Validators,FormBuilder, Form, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  form: FormGroup;
  unity = [
   ['1', '2', '3'],
   ['cl', 'L', 'ml', 'dl', 'galon'],
   ['cg', 'mg', 'g', 'Kg', 'dg']
  ];
  index = ['Entitées', 'Liquide', 'Grammes']
  
   
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      unity: ['', Validators.required],
      user: ['']
    });
  }

  onSelectChange(): void {
    let unityform = this.myform.get('untiy');
  }

  logForm(form){
    console.log(form.value)
  }
  

}
