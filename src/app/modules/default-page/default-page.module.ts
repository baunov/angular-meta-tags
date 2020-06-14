import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './default-page.component';
import {DefaultPageRoutingModule} from './default-page-routing.module';



@NgModule({
  declarations: [DefaultPageComponent],
  imports: [
    CommonModule,
    DefaultPageRoutingModule,
  ]
})
export class DefaultPageModule { }
