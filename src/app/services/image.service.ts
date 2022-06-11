import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment as env} from'../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File, data:any): Observable<any> {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('desc', data.desc);
    formData.append('ip', data.ip);
    formData.append('color', data.color);
    formData.append('model', data.model);
    formData.append('userID', data.userID);
    formData.append('image', image);

    return this.http.post(`${env.apiURL}phone`, formData);
  }
}