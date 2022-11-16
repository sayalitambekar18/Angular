import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myobservable = of(1,4,6,"Raj",true)
n:number = 23
 myobservable2$= new Observable(subscriber=>{
   subscriber.next(34)
   subscriber.next(56)
   setTimeout(()=>{subscriber.next(10)},1000)
   subscriber.next(15)
   if(this.n>0){
   throw Error("somthing went wrong")
   }
   subscriber.next(this.n)
  });

  constructor() {

 this.myobservable2$.subscribe({
  next:(value)=>{console.log(value)},    
  error:(e)=>{console.error("Error:-",e)}  
})
 console.log("hii1")
 }

  numbers$ = of(12,5,6,8,9,12,23)
  observer = (value:number) =>{console.log(value)}
  
  oper = (value:number) => value * value

  ngOnInit(): void {
  this.numbers$.pipe(filter(value=>value%2!=0)).subscribe(this.observer)
}
}

