import { CardUtenteComponent } from './../card-utente/card-utente.component';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {

  constructor(private fb:FormBuilder){}
  myform=this.fb.group({
    nome:['',Validators.required],
    cognome:['',Validators.required],
    dataNascita:['',Validators.required],
  })

  utenti: any[] = [];


  @ViewChild(CardUtenteComponent) card!: CardUtenteComponent


  onSubmit(myform:any){

    this.utenti.push(myform.value);
    console.log(this.utenti);
    this.card.takeUtente(this.utenti);

  };

}

