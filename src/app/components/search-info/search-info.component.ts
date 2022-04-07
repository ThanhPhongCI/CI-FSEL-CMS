import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.scss']
})
export class SearchInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [SearchInfoComponent],
  imports: [
    CommonModule,
  ],
  exports: [SearchInfoComponent],
})
export class SearchInfoModule {}
