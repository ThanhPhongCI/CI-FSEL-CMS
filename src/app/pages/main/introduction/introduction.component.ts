import { HttpClient } from '@angular/common/http';
import { IntroduceModel } from './../../../models/introduce.model';
import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  config = new IntroduceModel();
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
    private jsonService: JsonService
  ) { }

  ngOnInit(): void {
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.http.get('https://tbdhs-public.s3.ap-southeast-1.amazonaws.com/moet-tbdhs-front-page-introduction.json').subscribe((res: any) => {
      console.log(res);
      res = [res];
      res.forEach((element: any) => {
        element.html = element.content;
        element.content = element.content.replace(/(<([^>]+)>)/gi, "").slice(0, 100) + '...';
      });
      this.dataSub = res;
    });
  }

  getData(data: any) {
    console.log(data);
    console.log(this.currentHtml);
    // console.log(this.currentTitle);
    this.jsonService.update({
      file_name: "moet-tbdhs-front-page-introduction.json",
      value:
      {
        "title": this.currentTitle,
        "content": data
      }

    }).subscribe((res: any) => {

    })
  }

  handleOutput(data: any) {
    if (data.type == 'edit') {
      this.showForm = true;
      this.currentHtml = data.item.html;
      this.currentTitle = data.item.title;
    }
    if (data.type == 'create') {
      this.showFormNew = true;
    }
  }

  hideForm() {
    this.showForm = false;
    this.showFormNew = false;
  }

  update() {
    // this.getData();

  }
}
