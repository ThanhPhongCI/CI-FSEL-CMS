import { BannerModel } from './../../../../models/banner.model';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  config = new BannerModel();
  showForm = false;
  showFormNew = false;
  dataTable: any;
  listActive: any;
  listFilter: any;
  dataSub: any;

@ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.http.get('https://tbdhs-public.s3.ap-southeast-1.amazonaws.com/moet-tbdhs-front-page-banner.json').subscribe((res:any)=>{
      console.log(res);
      this.dataSub = res;
    });
  }

  handleOutput(data: any) {
    if(data.type == 'edit'){
      this.showForm = true;
    }
    if(data.type == 'create'){
      this.showFormNew = true;
    }
  }

  hideForm() {
    this.showForm = false;  
    this.showFormNew = false;
  }


}
