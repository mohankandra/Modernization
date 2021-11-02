import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent{
  selectedCountry:string = "";
  countries:any[]  = [
    {code:"In", country: "India"},
    {code:"UAE", country: "United Arab Emirates"},
    {code:"USA", country: "United states of America"},
    {code:"UK", country: "United Kingdom"}
  ];
 

 
  onclick():void{
    
  }
  
}