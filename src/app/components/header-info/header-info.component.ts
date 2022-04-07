import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}

@NgModule({
  declarations: [HeaderInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderInfoComponent],
})
export class HeaderInfoModule { }

