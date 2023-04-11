import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { PrimengModule } from './primeng.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    PrimengModule,
    FormsModule
  ]
})
export class SharedModule { }
