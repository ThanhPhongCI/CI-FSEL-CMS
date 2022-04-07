import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { NavComponentModule } from 'src/app/components/nav-menu/nav-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HeaderInfoModule } from 'src/app/components/header-info/header-info.component';
import { SearchBtnModule } from 'src/app/components/search-btn/search-btn.component';
import { SearchInfoModule } from 'src/app/components/search-info/search-info.component';




@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    NavComponentModule,
    MatSidenavModule,
    HeaderInfoModule,
    SearchBtnModule,
    SearchInfoModule,
    RouterModule
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
