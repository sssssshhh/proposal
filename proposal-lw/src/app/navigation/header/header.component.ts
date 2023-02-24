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
              label: '브릿센트 소개',
              items: [
                  {label: 'ABOUT US'},
                  {label: 'WHY US'}
              ]
          },
          {
              label: '1:1 영어수업'
          },
          {
            label: '콘텐츠',
            items: [
                {label: 'BLOG'},
            ]
        },
        {
          label: '수강후기',
          items: [
              {label: '수강생 후기'},
              {label: '수강생 인터뷰'}
            ]
          },
          {
          label: '로그인',
          }
        ] as MenuItem[];
      }
}
