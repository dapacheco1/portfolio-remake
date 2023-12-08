import { OverlayModule } from '@angular/cdk/overlay';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import moment from 'moment';
import { OsMenuTabComponent } from './components/os-menu-tab/os-menu-tab.component';
@Component({
  selector: 'os-navbar',
  standalone: true,
  imports: [OsMenuTabComponent,OverlayModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  public currentDate:string = '';
  public timeInterval:any;
  public menuTabStatus:boolean = false;
  public navList:Array<string> = [
    'New Folder',
    'New Text File'
  ];
  constructor(){}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.timeInterval = setInterval(()=>{
      this.currentDate = moment().format('MMM Do YYYY, h:mm:ss a');
    },100)
  }

  ngOnDestroy(): void {
      clearInterval(this.timeInterval);
  }

  public manageMenuTab(){
    this.menuTabStatus = !this.menuTabStatus;
  }
}
