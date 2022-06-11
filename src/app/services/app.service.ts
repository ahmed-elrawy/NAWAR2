import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment as env} from'../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient){}
  API= ''
  localhost= ""
  Phones():Observable<any> {      
    return this.http.get<any>(`${env.apiURL}phone`)
  }
  Phone(id:string):Observable<any> {
    return this.http.get<any>(`${env.apiURL}phone/${id}`)
  }

  delete(id:string):Observable<any>{
    let headers = new HttpHeaders();
    let state =  localStorage.getItem('state')?.toString()

    headers = headers.append('token', `Bearer ${JSON.parse(state+'').accessToken}`);
    return this.http.delete(`${env.apiURL}phone/${id}`,{headers: headers})
  }

  update(body:any) {
    let headers = new HttpHeaders();
    let state =  localStorage.getItem('state')?.toString()
    headers = headers.append('token', `Bearer ${JSON.parse(state+'').accessToken}`);
    return this.http.put(`${env.apiURL}phone/${body._id}`,body,{headers: headers})
  }


  filter(name:string) {
  console.log(name);
  
    return this.http.get(`${env.apiURL}phone/filter/${name}`)
  }
}
