import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

export interface list {
  tinh: string;
  STT: string;
  status: boolean;
  create_at: any;
}

// const ELEMENT_DATA: list[] = [
//   {
//     "tinh": "Miami Gardens",
//     "status": true,
//     "create_at": "1996-11-19T17:47:50.606Z",
//     "STT": "1"
//   },
//   {
//     "tinh": "Aurora",
//     "status": true,
//     "create_at": "2076-01-18T10:28:49.207Z",
//     "STT": "2"
//   },
//   {
//     "tinh": "Union City",
//     "status": false,
//     "create_at": "2027-01-14T13:04:58.677Z",
//     "STT": "3"
//   },
//   {
//     "tinh": "Terre Haute",
//     "status": true,
//     "create_at": "1996-12-13T04:14:51.518Z",
//     "STT": "4"
//   },
//   {
//     "tinh": "Lakewood",
//     "status": true,
//     "create_at": "2025-12-12T05:54:08.174Z",
//     "STT": "5"
//   },
//   {
//     "tinh": "Camarillo",
//     "status": true,
//     "create_at": "2051-11-09T01:08:42.273Z",
//     "STT": "6"
//   },
//   {
//     "tinh": "Evanston",
//     "status": true,
//     "create_at": "2002-12-26T16:48:50.030Z",
//     "STT": "7"
//   },
//   {
//     "tinh": "Chino Hills",
//     "status": false,
//     "create_at": "2098-08-13T09:18:57.868Z",
//     "STT": "8"
//   },
//   {
//     "tinh": "Lauderhill",
//     "status": true,
//     "create_at": "1997-10-03T15:16:17.239Z",
//     "STT": "9"
//   },
//   {
//     "tinh": "Springdale",
//     "status": false,
//     "create_at": "2093-05-16T09:34:30.846Z",
//     "STT": "10"
//   },
//   {
//     "tinh": "Greensboro",
//     "status": false,
//     "create_at": "1994-03-05T06:28:22.516Z",
//     "STT": "11"
//   },
//   {
//     "tinh": "San Bruno",
//     "status": true,
//     "create_at": "2078-10-08T19:08:45.039Z",
//     "STT": "12"
//   },
//   {
//     "tinh": "Concord",
//     "status": true,
//     "create_at": "2008-03-11T02:28:19.531Z",
//     "STT": "13"
//   },
//   {
//     "tinh": "Omaha",
//     "status": false,
//     "create_at": "2073-04-26T23:54:26.135Z",
//     "STT": "14"
//   },
//   {
//     "tinh": "Newark",
//     "status": false,
//     "create_at": "2087-12-10T00:34:26.223Z",
//     "STT": "15"
//   },
//   {
//     "tinh": "Folsom",
//     "status": true,
//     "create_at": "2078-08-24T21:20:46.046Z",
//     "STT": "16"
//   },
//   {
//     "tinh": "Collierville",
//     "status": false,
//     "create_at": "2061-07-14T12:09:11.898Z",
//     "STT": "17"
//   },
//   {
//     "tinh": "Milford",
//     "status": true,
//     "create_at": "2022-09-06T02:44:47.615Z",
//     "STT": "18"
//   },
//   {
//     "tinh": "Biloxi",
//     "status": false,
//     "create_at": "2019-07-12T23:34:57.892Z",
//     "STT": "19"
//   },
//   {
//     "tinh": "New Britain",
//     "status": false,
//     "create_at": "2085-06-27T06:03:41.442Z",
//     "STT": "20"
//   },
//   {
//     "tinh": "Appleton",
//     "status": false,
//     "create_at": "2063-03-31T07:00:35.888Z",
//     "STT": "21"
//   },
//   {
//     "tinh": "West Hartford",
//     "status": false,
//     "create_at": "2010-12-31T04:35:14.244Z",
//     "STT": "22"
//   },
//   {
//     "tinh": "Casa Grande",
//     "status": true,
//     "create_at": "1995-09-18T07:08:00.796Z",
//     "STT": "23"
//   },
//   {
//     "tinh": "Bountiful",
//     "status": false,
//     "create_at": "2005-06-28T17:19:15.383Z",
//     "STT": "24"
//   },
//   {
//     "tinh": "Taunton",
//     "status": false,
//     "create_at": "2041-06-18T14:31:18.475Z",
//     "STT": "25"
//   },
//   {
//     "tinh": "Dearborn",
//     "status": false,
//     "create_at": "2000-10-18T00:35:59.916Z",
//     "STT": "26"
//   },
//   {
//     "tinh": "Enid",
//     "status": true,
//     "create_at": "2060-10-08T01:41:23.363Z",
//     "STT": "27"
//   },
//   {
//     "tinh": "Arlington",
//     "status": true,
//     "create_at": "2075-05-02T16:17:13.743Z",
//     "STT": "28"
//   },
//   {
//     "tinh": "Saginaw",
//     "status": false,
//     "create_at": "2098-10-19T01:57:10.806Z",
//     "STT": "29"
//   },
//   {
//     "tinh": "Santa Maria",
//     "status": false,
//     "create_at": "2029-08-22T21:36:49.760Z",
//     "STT": "30"
//   }
// ];
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['category_id', 'title', 'content', 'status'];
  dataSource: any;

@ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {


    this.http.get('https://tbdhs-public.s3.ap-southeast-1.amazonaws.com/moet-tbdhs-competition-category.json').subscribe((res:any)=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
