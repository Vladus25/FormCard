import { Component } from '@angular/core';

@Component({
  selector: 'app-card-utente',
  templateUrl: './card-utente.component.html',
  styleUrls: ['./card-utente.component.css']
})
export class CardUtenteComponent {

  constructor(){}


  output:any;

  takeUtente(json:any){

    this.output = json;
    console.log(this.output[0])
  }
}
