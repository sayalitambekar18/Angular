import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
 
get(email:string){
      return this.http.get<User[]>(`http://localhost:3000/users?email=${email}`)
  }

  register(user:User){
  return this.http.post<User>('http://localhost:3000/users',user)
}

login(email:string,pass:string){
  return this.http.get<User[]>(`http://localhost:3000/users?email=${email}&password=${pass}`)
}
}
