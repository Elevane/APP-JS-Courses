import { Component } from '@angular/core';
import { RessourceService } from '../services/ressource.service';
import { AlertController } from '@ionic/angular';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private res;
  private toggle : boolean = false;
  private loading:boolean=false;
  private error = {'header' : '', 'message' : ''};
  constructor(private ressourceService: RessourceService, public alertController: AlertController) {}

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
    refresh(){
      this.loading = true;
      this.ressourceService.getAll().subscribe(data =>
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
    async refreshAlert() {
      const alert = await this.alertController.create({
        cssClass: 'refresh',
        header: 'refresh',
        subHeader: this.error['header'],
        message: this.error['message'],
        buttons: ['OK']
      });
  
      await alert.present();
    }
    getValidated(){
      let v = new Array();
      for (let r of this.res){
        if (r['validate'] == false){
           
         v.push(r); 
        }
        
      }
      console.log(v.length);
      if(v.length < 1){
        this.noResAlert();

      }
      else if(v.length > 0){
        this.confirmEnd(v.length, v).then();
      }
    }

    async confirmEnd(nbr, items) {
      
      const alert = await this.alertController.create({
        cssClass: 'Confirmer',
        header:"Confirmer",
        message: "Voulez vous retirer les <strong class='text-primary'>"+ nbr +"</strong> articles validés ?",
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Oui',
            handler: () => {
              this.deleteRes(items);
            }
          }
        ]
   
      });
  
      await alert.present();
    }

    async noResAlert() {
      
      const alert = await this.alertController.create({
        cssClass: 'Confirmer',
        header:"Erreur",
        message: "Aucun article à retirer",
        buttons: ['Ok']
      });
  
      await alert.present();
    }
    
    deleteRes(array){
      for(let i of array){
        this.ressourceService.delete(i['id']);
        
      }
     
    }
   
}
      
    

