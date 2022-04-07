import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { NavComponentModule } from 'src/app/components/nav-menu/nav-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    NavComponentModule,
    MatSidenavModule,
    RouterModule
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
