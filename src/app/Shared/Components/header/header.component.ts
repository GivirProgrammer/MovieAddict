import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {MenuItem, PrimeIcons} from 'primeng/api'
import { AuthenticateService } from 'src/app/Core/Service/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  items!:MenuItem[];
  zort!:any;

  constructor(private auth:AuthenticateService) {
  }

  ngOnInit(): void {
    this.items=[
      {
        label:"Profile",
        icon:PrimeIcons.USER,
        items:[
          {
            label:"My Reviews",
            icon:PrimeIcons.STAR
          },
          {
            label:"Logout",
            icon:PrimeIcons.LOCK_OPEN,
            command:((event:any)=>this.auth.Logout())


          }
        ]
      },
      {
        label:"WatchList",
        icon:PrimeIcons.LIST
      },
      {
        label:"Recent Movies",
        icon:PrimeIcons.HOURGLASS
      }


    ]




  }

}
