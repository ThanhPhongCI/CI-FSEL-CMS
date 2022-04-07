import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-btn',
  templateUrl: './search-btn.component.html',
  styleUrls: ['./search-btn.component.scss']
})
export class SearchBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}

@NgModule({
  declarations: [SearchBtnComponent],
  imports: [
    CommonModule,
  ],
  exports: [SearchBtnComponent],
})
export class SearchBtnModule { }
