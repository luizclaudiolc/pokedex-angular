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
      label: 'Pesquisa',
      icon: 'search'
    },
   /*  {
      label: 'About',
      icon: 'info_outline',
    }, */
  ];

  constructor() { }

  ngOnInit(): void {
  }

  search(event: Event): void {
    console.log(event.target);
  }

}
