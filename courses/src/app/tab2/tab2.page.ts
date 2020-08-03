import { Component } from '@angular/core';
import {FormBuilder, Form, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


private form: FormGroup;
private unities = [
  'litre', 'grammes', "entities"
]

private unities = {
  litre: ['ml', 'AfghanB', 'AfghanC'],
  grammes: ['AzerA', 'AzerB', 'AzerC'],
  entities: ['AlbaA', 'AlbaB', 'AlbaC'],
};

private subUnities = {}

  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [''],
      quantity: [''],
      super: [''],
      unity: [''],
      user: ['']
    });
  }

  onUnityChange(): void {
    let selectedunity = this.form.get('super').value;
    this.unities = this.AllsubUnities[selectedunity];
    console.log(this.subUnities);
    
  }

}
