import { Component } from '@angular/core';
import { RessourceService } from '../services/ressource.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private res;
  
  constructor(private ressourceService: RessourceService) {}

  ngOnInit() {
    this.ressourceService.getAll().subscribe(data =>
    {
      console.log(data);
      this.res = data;
      
    });
    
    }
}
