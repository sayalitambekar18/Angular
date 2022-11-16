import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DatePipe } from './pipe/date.pipe';
import { AppRoutingModule } from './app-routing.module';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudDetailsComponent } from './stud-details/stud-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    ListComponent,
    HomeComponent,
    AdmissionComponent,
    AboutUsComponent,
    ContactUsComponent,
    DatePipe,
    StudentFormComponent,
    StudDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
