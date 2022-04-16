import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CompetitionModel } from 'src/app/models/competition/competition-info.model';

@Component({
  selector: 'app-competition-info',
  templateUrl: './competition-info.component.html',
  styleUrls: ['./competition-info.component.scss']
})
export class CompetitionInfoComponent implements OnInit {

  config = new CompetitionModel();
  showForm = false;
  showFormNew = false;
  dataTable: any;
  listActive: any;
  listFilter: any;
  dataSub: any;
  currentHtml = '';
  currentTitle = '';
  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.http.get('https://tbdhs-public.s3.ap-southeast-1.amazonaws.com/moet-tbdhs-competition-question.json').subscribe((res:any)=>{
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
      console.log(data.item.html);
      this.currentHtml = data.item.html;
      this.currentTitle = data.item.title;
    }
    if(data.type == 'create'){
      this.showForm = true;
      this.currentHtml = '';
      this.currentTitle = '';
    }
  }

  hideForm() {
    this.showForm = false;  
    this.showFormNew = false;
  }
}
