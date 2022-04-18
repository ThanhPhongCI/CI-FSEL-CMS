import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-create-base',
  templateUrl: './create-base.component.html',
  styleUrls: ['./create-base.component.scss']
})
export class CreateBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [CreateBaseComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateBaseComponent]
})

export class CreateBaseComponentModule{}
