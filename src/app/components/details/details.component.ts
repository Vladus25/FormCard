import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(){}
  output:any
  nome:any;

  takeUtente(json:any){
    this.output=json
    console.log(this.output[0].name)
  }

  updateUser(email:any){

    for(let i=0;i<this.output.length;i++){
      if(this.output[i].email==email){
        break;
      }
    }

  }
  deleteUser(email:any){

    for(let i=0;i<this.output.length;i++){
      if(this.output[i].email==email){
        this.output.splice(i, 1);

        break;
      }
    }
  }

}
