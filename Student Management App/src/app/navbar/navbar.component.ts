import { Component } from "@angular/core";
import { StudService } from "../service/stud.service";

@Component({
    selector:'<app-navbar>',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})
export class NavbarComponent
{
  constructor(studService:StudService) {

    console.log("Navbar Component is created.")
    
   }

}