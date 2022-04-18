import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CompetitionModel } from 'src/app/models/competition/competition-info.model';
import { JsonService } from 'src/app/services/json.service';

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
  currentIndex: any;
  currentStatus: boolean = false;
  dataPush: any;

  formCreate = false;

  constructor(
    private http: HttpClient,
    private jsonService: JsonService
  ) { }

  ngOnInit(): void {
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.jsonService.get('moet-tbdhs-competition-info.json').subscribe((res: any) => {
      let data = JSON.parse(res.content);
      console.log(data);

      data.forEach((element: any) => {
        element.html = element.content;
        console.log(element.content);

        element.content = element.content.replace(/(<([^>]+)>)/gi, "").slice(0, 100) + '...';
      });
      this.dataSub = data;
    });

    this.jsonService.get('moet-tbdhs-competition-info.json').subscribe((res: any) => {
      let data = JSON.parse(res.content);
      console.log(data);
      this.dataPush = data;

    });

  }

  changeStatus() {
    this.currentStatus = !this.currentStatus
  }
  // statusFalse() {
  //   this.currentStatus = false;
  //   console.log(this.currentStatus);
  // }
  // statusTrue() {
  //   this.currentStatus = true;
  //   console.log(this.currentStatus);
  // }

  handleOutput(data: any) {
    console.log(data);

    if (data.type == 'edit') {
      this.showForm = true;
      console.log(data.item.html);
      this.currentHtml = data.item.html;
      this.currentTitle = data.item.title;
      this.currentIndex = data.index;
      this.currentStatus = data.item.status;
    }

    if (data.type == 'create') {
      this.formCreate = true;
      this.showForm = true;
      this.currentHtml = '';
      this.currentTitle = '';
    }
  }

  hideForm() {
    this.showForm = false;
    this.showFormNew = false;
  }

  getData(data: any) {
    console.log(data);

    if (data == false) {
      this.hideForm();
    } else {

      if (this.formCreate) {
        let arr = {
            title: this.currentTitle,
            status: this.currentStatus,
            content: data
          }
        this.dataPush.push(arr);
        this.jsonService.update({
          file_name: "moet-tbdhs-competition-info.json",
          value: this.dataPush
        }).subscribe((res: any) => {
          console.log(this.dataPush[this.currentIndex]);
        },
          (err) => {
            console.log(this.dataPush);

          })
      } else {

        this.dataPush[this.currentIndex].title = this.currentTitle;
        this.dataPush[this.currentIndex].status = this.currentStatus;
        this.dataPush[this.currentIndex].content = data;
        this.jsonService.update({
          file_name: "moet-tbdhs-competition-info.json",
          value: this.dataPush
        }).subscribe((res: any) => {
          console.log(this.dataPush[this.currentIndex]);

        })

      }

    }

  }

}
