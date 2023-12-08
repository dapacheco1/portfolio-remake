import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OsMenuTabComponent } from './components/os-menu-tab/os-menu-tab.component';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    OsMenuTabComponent,
  ],
  exports:[
    NavbarComponent,
  ]
})
export class NavbarModule { }
