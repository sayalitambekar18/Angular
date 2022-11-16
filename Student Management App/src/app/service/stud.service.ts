import { Injectable } from '@angular/core';
import { Student } from '../app/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudService 
{

    studlist:Student[] = [
      {
        "studId":101,
        "studName":'Neha Shinde',
        "studAddress":'pune',
        "studDOB":new Date(2000,2,22),
        "studMobileNo":7789098000,
        "studDepartment":"Computer Science",
        "studFees":45000,
        "studImage":"assets/images/img1.png",
        "studAdmissionDate":new Date(2022,7,10)
      },
      {
        "studId":102,
        "studName":'Ojas Powar',
        "studAddress":'Mumbai',
        "studDOB":new Date(1996,5,15),
        "studMobileNo":9089098090,
        "studDepartment":"Electronics",
        "studFees":42000,
        "studImage":"assets/images/img3.png",
        "studAdmissionDate":new Date(2022,6,12)
      },
      {
        "studId":103,
        "studName":'Sneha Patil',
        "studAddress":'Thane',
        "studDOB":new Date(1999,8,20),
        "studMobileNo":8889098803,
        "studDepartment":"Mechanical",       
        "studFees":35000,
        "studImage":"assets/images/img2.png",
        "studAdmissionDate":new Date(2022,7,9)

      },
      {
        "studId":104,
        "studName":'Mayur Mali',
        "studAddress":'Satara',
        "studDOB":new Date(1997,7,17),
        "studMobileNo":9589098201,
        "studDepartment":"Civil",        
        "studFees":40000,
        "studImage":"assets/images/img5.png",
        "studAdmissionDate":new Date(2022,6,15)

      },
      {
        "studId":105,
        "studName":'Shrisha Jadhav',
        "studAddress":'Kolhapur',
        "studDOB":new Date(1998,11,6),
        "studMobileNo":9089698201,
        "studDepartment":"Computer Science",      
        "studFees":45000,
        "studImage":"assets/images/img4.png",
        "studAdmissionDate":new Date(2022,7,16)
      },       
      {
        "studId":106,
        "studName":'Avni Shirke',
        "studAddress":'Sangli',
        "studDOB":new Date(1999,5,1),
        "studMobileNo":9889091020,
        "studDepartment":"Civil",      
        "studFees":40000,
        "studImage":"assets/images/img2.png",
        "studAdmissionDate":new Date(2022,6,17)
      },
    ]

  constructor() {
    console.log("Service is created.")
   }

   getlist():Student[]{
    return this.studlist
   }

   addstud(stud:Student):void
   {
     stud.studDOB = new Date(stud.studDOB)
     stud.studImage = "assets/images/dummy.webp"

    this.studlist.push(stud)
   }

   getstudbyid(id:number):Student
   {
    let s:Student = this.studlist.find(stud=>stud.studId==id)!
    return s
   }
   updatestud(stud:Student)
   {
    let index = this.studlist.indexOf(stud)
    stud.studDOB = new Date(stud.studDOB)
    this.studlist[index]=stud
   }
}
