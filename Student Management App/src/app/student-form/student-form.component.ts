import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Student } from '../app/student.model';
import { StudService } from '../service/stud.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
 studform:Student = new Student()

 savestud()
 {
  let stud:Student = this.studService.getstudbyid(this.studform.studId)!
  if(stud)
  {
    this.studService.updatestud(stud)
  }
  else{
  this.studService.addstud(this.studform)
  }
  this.router.navigate(['/list'])
  }
  
  constructor(private studService:StudService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = eval(this.route.snapshot.paramMap.get("id")!)
    if(id){
      this.studform = this.studService.getstudbyid(id)
    }
  }

}
