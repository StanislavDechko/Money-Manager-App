import { UserUrls } from './../../environments/constans';
import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(UserUrls.Api + UserUrls.GetUserInfo);
  }

}
