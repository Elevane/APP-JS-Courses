import { Component } from '@angular/core';
import {FormBuilder, Form} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {



  registrationForm = this.formBuilder.group({
    name: [''],
    quantity: [''],
    unity: [''],
    user: ['']
  });
  constructor(private formBuilder: FormBuilder) {

  }

}
