import { Component } from '@angular/core';
import { RessourceService } from '../services/ressource.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private res;
  private toggle : boolean = false;
  constructor(private ressourceService: RessourceService) {}

  ngOnInit() {
    this.ressourceService.getAll().subscribe(data =>
    {
      console.log(data);
      this.res = data;
      for (const key in data) {
       this.res[key]["validate"] = true;
       this.res[key]["color"] = 'light';
      }
      this.res.sort(function(x, y) { return y.validate - x.validate })
    });
    
    }
    clickEvent(item){
      //if you just want to toggle the class; change toggle variable.
      item["validate"] = !item['validate']
        if(item["color"] === "light"){
          item['color'] = 'primary'
        }
        else{
          item['color'] = 'light'
        }
      this.res.sort(function(x, y) { return y.validate - x.validate });
      console.log(item.color);
      
      
   }
    

   deleteRes(){
     console.log(this)
   }
}
      
    

