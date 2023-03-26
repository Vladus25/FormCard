import { DetailsComponent } from './../details/details.component';
// import { CardUtenteComponent } from './../card-utente/card-utente.component';
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
    // nome:['',Validators.required],
    // cognome:['',Validators.required],
    // dataNascita:['',Validators.required],
    name:['',Validators.required],
    surname:['',Validators.required],
    email:['',Validators.required],
    street:[''],
    city:[''],
  })

  utenti: any[] = [];

  // @ViewChild(CardUtenteComponent) card!: CardUtenteComponent
  @ViewChild(DetailsComponent) cardfiglio!: DetailsComponent

  onSubmit(myform:any){

    this.utenti.push(myform.value);
    console.log(this.utenti);
    // this.card.takeUtente(this.utenti);

  };

  showLista() {

    let form = document.getElementById("form1");
    if (form!){
      form.classList.add("nascondi")
      this.myform.reset()
    }
    let card = document.getElementById("app-dettagli")
    if (card!)
      card.classList.remove("nascondi")

    this.cardfiglio.takeUtente(this.utenti)
  }

  showForm() {
    let form = document.getElementById("form1");

    if (form!)
      form.classList.remove("nascondi")

    let card = document.getElementById("app-dettagli")
    if (card!)
      card.classList.add("nascondi")

  }

}

