import { TableBaseComponentModule } from './../../../components/table-base/table-base.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [
    CommonModule,
    // MatTableModule,
    // MatSortModule,
    // MatPaginatorModule,
    TableBaseComponentModule,
    HttpClientModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    },
    {
      path: 'banner',
      component: BannerComponent
    }])
  ],
  exports: [HomeComponent, BannerComponent]
})
export class HomeModule { }
