import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainLayoutModule } from 'src/app/layouts/main-layout/main-layout.module';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    RouterModule.forChild(mainRoutes),
  ]
})
export class MainModule { }
