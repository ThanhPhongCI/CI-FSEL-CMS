import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-table-base',
  templateUrl: './table-base.component.html',
  styleUrls: ['./table-base.component.scss']
})
export class TableBaseComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() tableData: any;
  @Input() listActive?: any;
  @Output() callback = new EventEmitter<any>();
  totalPage!: number;
  currentPage = 1;
  dataSub = [];
  pageSize = 5;
  checkSelectAll: any;
  showDelete = false;
  listSelectAll: any = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPage = Math.ceil(this.data.length / this.pageSize);
    this.currentPage = 1;
    this.onLoadDatePagitor();
    this.data.map((x: any) => x.check === false);
    this.showDelete = false;
    this.checkSelectAll = false;
  }

  ngOnInit() {
    this.totalPage = Math.ceil(this.data.length / this.pageSize);
    this.onLoadDatePagitor();
  }

  selectAll(value: any) {
    this.checkSelectAll = true;
    this.listSelectAll.length = 0;
    this.data.forEach((x: any) => {
      x.check = value;
    });
    this.data.forEach((x: any) => {
      if (x.check === true) {
        this.listSelectAll.push(x);
      }
    });
    if (this.listSelectAll.length === 0) {
      this.showDelete = false;
    } else {
      this.showDelete = true;
    }
    console.log(this.listSelectAll);
  }
  selectItem(item: any, value: any) {
    this.showDelete = value;
    this.listSelectAll.length = [];
    item.check = value;
    this.data.forEach((x: any) => {
      if (x.check === true) {
        this.listSelectAll.push(x);
      }
    });
    if (this.listSelectAll.length === 0) {
      this.showDelete = false;
      this.checkSelectAll = false;
    }
    if (
      this.listSelectAll.length !== 0 &&
      this.listSelectAll.length === this.data.length
    ) {
      this.showDelete = true;
      this.checkSelectAll = true;
    }
    if (
      this.listSelectAll.length !== 0 &&
      this.listSelectAll.length !== this.data.length
    ) {
      this.showDelete = true;
      this.checkSelectAll = false;
    }
  }

  nextPage = () => {
    if (this.currentPage + 1 > this.totalPage) {
      return;
    }
    this.currentPage += 1;
    this.onLoadDatePagitor();
  };

  backPage = () => {
    if (this.currentPage - 1 === 0) {
      return;
    }
    this.currentPage -= 1;
    this.onLoadDatePagitor();
  };

  onLoadDatePagitor = () => {
    this.dataSub = this.data.filter(
      (x: any, ix: any) =>
        (this.currentPage - 1) * this.pageSize <= ix &&
        ix < this.currentPage * this.pageSize
    );
  };

  onClickSetting = (item: any, type: any, index: number) => {
    this.callback.emit({
      item,
      type,
      index
    });
  };

  onClickBtnActive = (i: any) => {
    if (i.type !== 'create') {
      this.callback.emit({
        type: i.type,
        service: i.service,
      });
    } else {
      this.callback.emit({
        type: i.type
      });
    }
  };

  handleRouteLink = (item: any) => {
    this.callback.emit({
      type: 'route',
      item,
    });
  };
  handleClickRow(item: any) {
    this.callback.emit({
      item
    });
  }
  clickCreate() {
    this.callback.emit({
      type: 'create',
    });
  }
  import() {
    this.callback.emit({
      type: 'import',
    });
  }

}

@NgModule({
  declarations: [TableBaseComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  exports: [TableBaseComponent]
})

export class TableBaseComponentModule { }
