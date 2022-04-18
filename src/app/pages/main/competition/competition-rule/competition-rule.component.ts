import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompetitionModel } from 'src/app/models/competition/competition-info.model';

@Component({
  selector: 'app-competition-rule',
  templateUrl: './competition-rule.component.html',
  styleUrls: ['./competition-rule.component.scss']
})
export class CompetitionRuleComponent implements OnInit {

  config = new CompetitionModel();
  showForm = false;
  showFormNew = false;
  dataTable: any;
  listActive: any;
  listFilter: any;
  dataSub: any;
  currentHtml: any;
  currentTitle: any;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.http.get('https://tbdhs-public.s3.ap-southeast-1.amazonaws.com/moet-tbdhs-competition-rule.json').subscribe((res:any)=>{
      console.log(res);
      res.forEach((element: any) => {
        element.html = element.content;
        element.content = element.content.replace(/(<([^>]+)>)/gi, "").slice(0,100) + '...';

      });
      this.dataSub = res;
    });
  }

  handleOutput(data: any) {
    if(data.type == 'edit'){
      this.showForm = true;
      this.currentHtml = data.item.html;
      this.currentTitle = data.item.title;
    }
    if(data.type == 'create'){
      this.showForm= true;
      this.currentHtml = '';
      this.currentTitle = '';
    }
  }

  hideForm() {
    this.showForm = false;  
    this.showFormNew = false;
  }
}
