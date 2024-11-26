import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  //affecter un couleur special à chaque type de user (admin,simple user)
  //methode 1:creation d'une methode puis la faire  appel dans le view
  userRole:string ='user';
  getNavBarColor():string {
    if(this.userRole==='admin'){
      return 'navbar-dark bg-dark';

    }

    return 'navbar-light bg-light';
  }

//methode 2 :changer simplement le view sans consulter le ts
  isAdmin : boolean = true;
//seulement ajouter le code ci dessous dans le view
//<nav [ngClass]="isAdmin ? 'navbar navbar-expand-lg navbar-dark bg-dark' : 'navbar navbar-expand-lg navbar-light bg-light' ">

}
