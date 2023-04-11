import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../Core/Service/authenticate.service';
import { MessageService } from 'primeng/api';
import { User } from '../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserForm!: FormGroup;
  User!:User;
  constructor(private fb: FormBuilder,private auth:AuthenticateService,private messageService:MessageService) {

  }



  ngOnInit(): void {


    this.UserForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  LoginUser(){
    this.auth.LoginUser(this.UserForm);
  }

}
