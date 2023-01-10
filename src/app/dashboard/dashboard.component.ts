import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  message: string;
  username: string | undefined;
 
  constructor() {
    if (this.username) {
      this.message = 'Welcome ' + this.username;
    } else {
      this.message = 'Welcome';
    }
  }

  login(){
    console.log('login() attempted');

  }

  addEntry(){
    console.log( 'addEntry() attempted');

  }

    entries = [{time: '9:00 AM', date: 'Jan 1, 2021', rating: '5', message: 'First entry', username: 'Aida P'},
               {time: '10:00 AM', date: 'Jan 2, 2021', rating: '4', message: 'Second entry', username: 'Abhishek Y'},
               {time: '11:00 AM', date: 'Jan 3, 2021', rating: '3', message: 'Third entry', username: 'Aida P'},
               {time: '11:00 AM', date: 'Jan 3, 2021', rating: '3', message: 'Third entry', username: 'Aida P'},
               {time: '11:00 AM', date: 'Jan 3, 2021', rating: '3', message: 'Third entry', username: 'Abhishek Y'},
               {time: '11:00 AM', date: 'Jan 3, 2021', rating: '3', message: 'Third entry', username: 'Aida P'}];

    displayMessage(message: string){
        console.log(message);
    }


}
