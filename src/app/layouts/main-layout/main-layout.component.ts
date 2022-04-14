import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  showFiller = false;
  dataNav = {
    list: [
      {
        icon: 'assets/img/home-icon.svg',
        name: 'Trang chủ',
        linkURL: 'home',
        subs: []
      },
      {
        icon: 'assets/img/category-icon.svg',
        name: 'User',
        linkURL: '',
        subs: [
          { name: 'Danh mục Tỉnh/TP', path: 'user' },
          { name: 'Danh mục Quận/Huyện', path: '' },
          { name: 'Danh mục Trường', path: '' }
        ]
      },

    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

}
