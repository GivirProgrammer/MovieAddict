import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

    LOGIN_API="https://localhost:7253/api/Token";

    constructor(private http:HttpClient,private route:Router) {

    }

    LoginUser(fg:FormGroup){

      let params=new HttpParams().append('UserName',fg.get('UserName')?.value).append('Password',fg.get('Password')?.value);
      return this.http.post(this.LOGIN_API,null,{params}).subscribe((res:any)=>{
        localStorage.setItem('access_token',res.token);
        localStorage.setItem('UserName',fg.get('UserName')?.value);

        this.route.navigate(['public/home-page']);
      })
    }

    getToken(){
      return localStorage.getItem('access_token');

    }

    Logout(){
      let removeToken=localStorage.removeItem('access_token');
      if(removeToken==null){
        this.route.navigate(['']);
      }
    }

}
