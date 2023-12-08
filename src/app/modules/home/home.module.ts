import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
  ]
})
export class HomeModule { }
