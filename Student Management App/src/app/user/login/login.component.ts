import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private fb:FormBuilder,private userservice:UserService,private router:Router,private sankbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  loginform = this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
  })
  get email():FormControl{
    return this.loginform.get('email') as FormControl
  }
    get password():FormControl{
    return this.loginform.get('password') as FormControl
  }


dologin(){
  let email = this.email.value
  let pass = this.password.value

  this.userservice.login(email,pass).subscribe({
    next:user =>{
      if(user.length>0)
      {
        this.sankbar.open('Login Successfull...',undefined,{duration:3000})
        this.router.navigate(['/user'])
      }

      else{
           this.sankbar.open('Login Unuccessfull...',undefined,{duration:3000})
      }
    }
  })
}

}
