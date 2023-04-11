import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { PublicModule } from './Features/public/public/public.module';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    PublicModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    ToastModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain:'dev-zwd8kqwh6lem525r.us.auth0.com',
      clientId:'1MUmtb5aQmQFf5RkT00YYEfC3iavVAjJ',
      authorizationParams:{
        redirect_uri:"http://localhost:4200/public/home-page"
      }

    })


  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
