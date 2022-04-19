import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.scss']
})
export class ConfirmOtpComponent implements OnInit {
  checkNullOtp = false;

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

    this.conFirm.value.otp = this.conFirm.value.otp.toLowerCase();

    if (!this.conFirm.valid) {
      if(!this.conFirm.value.email) {
        this.checkNullOtp = true;
      } else {
        this.checkNullOtp = false;
      }
    } else {
      console.log(this.conFirm.value);
    }


  }

  focus() {
    this.checkNullOtp = false;
  }

  handleClear() {
    this.conFirm.get('otp')?.setValue('');

  }

}
