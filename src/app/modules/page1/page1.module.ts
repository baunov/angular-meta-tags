import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { Page1RoutingModule } from './page1-routing.module';



@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule,
    Page1RoutingModule,
  ]
})
export class Page1Module { }
