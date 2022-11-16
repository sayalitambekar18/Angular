import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../app/student.model';
import { StudService } from '../service/stud.service';

@Component({
  selector: 'app-stud-details',
  templateUrl: './stud-details.component.html',
  styleUrls: ['./stud-details.component.css']
})
export class StudDetailsComponent implements OnInit {

  stud!: Student

  constructor(private route:ActivatedRoute, private studService:StudService) { }

  ngOnInit(): void 
  {
    let id:number = eval(this.route.snapshot.paramMap.get("id")!)
    this.stud = this.studService.getstudbyid(id)
  }

}
