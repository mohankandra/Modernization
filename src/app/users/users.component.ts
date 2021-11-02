import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation :ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  isAvailable:boolean = true;
  allowNewuser = false;
  userCreatedStatus = "No user is created";
  userName='kandra';
  isUserCreated = false;

  changeUserCreatedStatus(){
    this.isUserCreated = true;
    this.userCreatedStatus = "User is Created ";
  }

  constructor() { 
    setTimeout(() => {
      this.allowNewuser = true
    }, 3000);
  }
  onUpdateUser(event:Event){
    this.userName = (event.target as HTMLInputElement).value;
    
  }

  ngOnInit(): void {
  }

}
