import { Component, OnInit } from '@angular/core';
import { Student } from '../app/student.model';
import { StudService } from '../service/stud.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit 
{
  studlist!:Student[];

//    cssClasses={
//     'text-center':true,
//     'text-info':true,
//     'fst-italic':true,
//     'fs-2':false
//  }
//    cssImgStyle={
//     "height":"150px",
//  }
//    cssCardStyle={
//   'border':'2px plane blue',
//   'border-radius':"10px"
//  }
    searchStudName:string=""
    searchStud(event:any):void{
    this.searchStudName=event.target.value
    this.filteredlist=this.studlist.filter(stud=>stud.studName.toLowerCase().startsWith(this.searchStudName.toLowerCase()))
    }
    filteredlist:Student[]=this.studlist
    filterbyDept(dname?:string)
 {
    if(dname)
    {
      this.filteredlist = this.studlist.filter(stud=>stud.studDepartment==dname)
    }else{
      this.filteredlist = this.studlist
    }
 }
 
 deletestud(id:number){
  alert(id)
  let stud = this.studlist.find(stud=>stud.studId==id)!
  alert(stud)
  let index = this.studlist.indexOf(stud)
  alert(index)
  this.studlist.splice(index,1)
 }

  constructor(private studService:StudService) { }
  ngOnInit(): void 
  {
    this.studlist = this.studService.getlist()
   
    this.filteredlist = this.studlist
  }
}
