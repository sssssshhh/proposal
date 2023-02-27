import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
          {
              label: '메뉴1',
          },
          {
              label: '메뉴2'
          },
          {
            label: '메뉴3',
          },
          {
          label: '메뉴4',
          },
          {
          label: '메뉴5',
          }
        ] as MenuItem[];
      }
}
