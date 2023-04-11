import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {DividerModule} from 'primeng/divider';
import {RatingModule} from 'primeng/rating';
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    DividerModule,
    RatingModule,
    GalleriaModule
  ],
  exports:[
    CommonModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    AccordionModule,
    DividerModule,
    RatingModule,
    GalleriaModule
  ]
})
export class PrimengModule { }
