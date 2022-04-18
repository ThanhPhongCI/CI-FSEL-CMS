import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-edit-base',
  templateUrl: './edit-base.component.html',
  styleUrls: ['./edit-base.component.scss']
})
export class EditBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [EditBaseComponent],
  imports: [
    CommonModule
  ],
  exports: [EditBaseComponent]
})

export class EditBaseComponentModule{}
