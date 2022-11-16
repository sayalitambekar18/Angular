import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { StudDetailsComponent } from './stud-details/stud-details.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'admission/list',component:ListComponent},
  {path:'addstud',component:StudentFormComponent},
  {path:'editstud/:id',component:StudentFormComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'studdetails/:id',component:StudDetailsComponent},
  {path:'contactus',component:ContactUsComponent},
  
  {path:'user',loadChildren:()=> import('./user/user.module').then(m =>m.UserModule)}
  ];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
