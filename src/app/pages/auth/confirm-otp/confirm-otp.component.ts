import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.scss']
})
export class ConfirmOtpComponent implements OnInit {

  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
  }

  conFirm = this.fb.group({
    "otp" : ["",[Validators.required,Validators.pattern('^[1234567890]*$')]],
  })

  get f() {
    return this.conFirm.controls
  }

  onSubmit() {
    console.log(this.conFirm.value);
  }

  handleClear() {
    this.conFirm.get('otp')?.setValue('');

  }

}
