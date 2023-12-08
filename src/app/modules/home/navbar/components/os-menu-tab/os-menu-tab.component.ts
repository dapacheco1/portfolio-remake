import { Component, Input } from '@angular/core';

@Component({
  selector: 'os-menu-tab',
  standalone: true,
  imports: [],
  templateUrl: './os-menu-tab.component.html',
  styleUrl: './os-menu-tab.component.scss'
})
export class OsMenuTabComponent {
  @Input('selectedOption') selectedOption:'file' | '' = '';
  @Input('navListOptions') navListOptions:Array<string> = [];
  constructor(){}
}
