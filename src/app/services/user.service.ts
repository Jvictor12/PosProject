import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users';


const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'aplication/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: String = 'http://localhost:3000' 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.BASE_URL + 'users')
  }

  addUsers(user: User): Observable<User> {
    return this.http.post<User>(this.BASE_URL + 'users', user, httpOptions)
  } 

  editUsers(user: User): Observable<User> {
    return this.http.put<User>(this.BASE_URL + 'users/' + user.id, user, httpOptions)
  } 

  deleteUsers(user: User): Observable<User> {
    return this.http.post<User>(this.BASE_URL + 'users/' + user.id,httpOptions)
  } 
}