import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['index', 'job_title_id', 'name','edit'];
  dataSource: any;
  listJob: any = [];
  listProvince: any = [];
  showForm = false;

@ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {


    this.http.get('https://tbdhs-public.s3.ap-southeast-1.amazonaws.com/moet-tbdhs-user-job-title.json').subscribe((res:any)=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
    });

    this.http.get('https://tbdhs-public.s3.ap-southeast-1.amazonaws.com/moet-tbdhs-user-job-title.json').subscribe((data: any) => {
      this.listJob = data;
      console.log(this.listJob);
    });

    this.http.get('https://tbdhs-public.s3.ap-southeast-1.amazonaws.com/moet-tbdhs-user-province.json').subscribe((data: any) => {
      this.listProvince = data;
      console.log(this.listProvince);
    });
  }

  showEdit() {
    this.showForm = true;
  }

  hideForm() {
    this.showForm = false;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

