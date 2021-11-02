import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId:number =10;
  userStatus:string;


  constructor() {
    this.userStatus = Math.random() >0.5 ? 'Online' : 'Offline'
   }
  getUserStatus(){
   return this.userStatus;
  }

  getColor(){
    if(this.userStatus === "offline"){
      return 'red';
    }else{
      return 'green';
    }
  }
  ngOnInit(): void {
  }

}
