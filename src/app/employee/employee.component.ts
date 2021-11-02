import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName:String = "Mohan";
  lastName:string="kandra";
  age:number= 29;
  gender:string="Male";
  constructor() { }

  ngOnInit(): void {
  }

}
