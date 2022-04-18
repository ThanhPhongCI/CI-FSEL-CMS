import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableBaseComponentModule } from 'src/app/components/table-base/table-base.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainLayoutModule } from 'src/app/layouts/main-layout/main-layout.module';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { IntroductionComponent } from './introduction/introduction.component';
import { HtmlEditorComponentModule } from 'src/app/components/html-editor/html-editor.component';



@NgModule({
  declarations: [
    MainComponent,
    IntroductionComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    TableBaseComponentModule,
    HttpClientModule,
    HtmlEditorComponentModule,
    FormsModule,
    RouterModule.forChild(mainRoutes),
  ]
})
export class MainModule { }
