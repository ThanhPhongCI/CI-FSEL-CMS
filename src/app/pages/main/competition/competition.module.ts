import { FormsModule } from '@angular/forms';
import { HtmlEditorComponentModule } from './../../../components/html-editor/html-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionComponent } from './competition.component';
import { CompetitionInfoComponent } from './competition-info/competition-info.component';
import { CompetitionRuleComponent } from './competition-rule/competition-rule.component';
import { CompetitionQuestionComponent } from './competition-question/competition-question.component';
import { TableBaseComponentModule } from 'src/app/components/table-base/table-base.component';



@NgModule({
  declarations: [
    CompetitionComponent,
    CompetitionInfoComponent,
    CompetitionRuleComponent,
    CompetitionQuestionComponent,
    
  ],
  imports: [
    CommonModule,
    TableBaseComponentModule,
    HttpClientModule,
    HtmlEditorComponentModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'info',
        component: CompetitionInfoComponent
      },
      {
        path: 'rule',
        component: CompetitionRuleComponent
      },
      {
        path: 'question',
        component: CompetitionQuestionComponent
      },

  ])
  ]
})
export class CompetitionModule { }
