import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../interfaces/item-menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  itensMenu: ItemMenu[] = [
    {
      label: 'Home',
      icon: 'home',
    },
    {
      label: 'About',
      icon: 'info_outline',
    },
    {
      label: 'Contact',
      icon: 'mail_outline',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
