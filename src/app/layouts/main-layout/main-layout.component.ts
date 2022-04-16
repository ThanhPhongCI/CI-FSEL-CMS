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
        subs: [
          { name: 'Banner', path: 'home/banner' },
        ]
      },
      {
        icon: 'assets/img/category-icon.svg',
        name: 'User',
        linkURL: '',
        subs: [
          { name: 'Danh mục Tỉnh/TP', path: 'user' },
          // { name: 'Danh mục Quận/Huyện', path: 'province' },
          // { name: 'Danh mục Trường', path: 'school' }
        ]
      },
      {
        icon: 'assets/img/category-icon.svg',
        name: 'Cuộc thi',
        linkURL: 'competition',
        subs: [
          { name: 'Thông tin cuộc thi', path: 'competition/info' },
          { name: 'Thể lệ cuộc thi', path: 'competition/rule' },
          { name: 'Câu hỏi thường gặp', path: 'competition/question' }
        ]
      },
      {
        icon: 'assets/img/category-icon.svg',
        name: 'Giới thiệu',
        linkURL: 'introduce',
        subs: []
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
