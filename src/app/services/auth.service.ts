import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import {environment as env} from'../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User!:Observable<any>
  public weatherData: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }



  logIn(body:any):Observable<any> {
    return this.http.post<any>(`${env.apiURL}auth/login`,body).pipe(
      tap((data) => {
        localStorage.setItem("state", JSON.stringify(data));
        this.weatherData.next(data)

      })
    )
  }

  

  signIn(body:any):Observable<any> {
    console.log(body)
    return this.http.post<any>(`${env.apiURL}auth/register`,body).pipe(
      tap((data) => {
        this.logIn(body).subscribe(res=> console.log('user is logged-in'))
      }))
  }

  Logout(): void {
  
    localStorage.clear()
    location.reload();
  }

  user(id:string):Observable<any> {
    let headers = new HttpHeaders();
    let state =  localStorage.getItem('state')?.toString()

    headers = headers.append('token', `Bearer ${JSON.parse(state+'').accessToken}`);
   return this.http.get<any>(`${env.apiURL}users/find/${id}`,{headers: headers})
  }

  isLoggedIn(): boolean {
   let state =  localStorage.getItem('state')?.toString()
   if(state&&JSON.parse(state+'').accessToken){
    return true;
     }else{
    return false;
    }
   }

   isAdmin(): boolean {
    let state =  localStorage.getItem('state')?.toString()
    if(state&&JSON.parse(state+'').isAdmin ==false){
     return false;
    }else{
     return true;
   }
    }
   




   update(id:string, body:any):Observable<any> {
    let headers = new HttpHeaders();
    let state =  localStorage.getItem('state')?.toString()

    headers = headers.append('token', `Bearer ${JSON.parse(state+'').accessToken}`);


    const D = { username: 'Angular PUT Request Example' };

    return this.http.put<any>(`${env.apiURL}users/${id}`,body, {headers: headers})
   }
  
  //  ?console.log(true):console.log(false);   
   
  
}
