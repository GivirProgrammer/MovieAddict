import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {CardModule} from 'primeng/card'


@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
