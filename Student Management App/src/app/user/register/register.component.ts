import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

constructor(private fb:FormBuilder,private userservice:UserService,private router:Router,private sankbar:MatSnackBar) { }
   
  regform = this.fb.group({

    name:['',[Validators.required]],
    age:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
  })

  get name():FormControl{
    return this.regform.get('name') as FormControl
  }
  get age():FormControl{
    return this.regform.get('age') as FormControl
  }
  get email():FormControl{
    return this.regform.get('email') as FormControl
  }
  get password():FormControl{
    return this.regform.get('password') as FormControl
  }

  doregister()
{
   let user:User = new User()
   user.name =this.name.value
   user.age =this.age.value
   user.email =this.email.value
   user.password =this.password.value
  
   this.userservice.register(user).subscribe({
    next:user =>{
      console.log("Registration Successfull.",user)
        this.sankbar.open('Registration Successfull.',undefined,{duration:3000
    })
        this.router.navigate(['/user','login'])
   
  },
    error:e =>{console.log("Some Error is Occurs")}
})
}
   ngOnInit(): void {
   }
  }






  

