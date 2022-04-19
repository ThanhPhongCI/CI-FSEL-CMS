import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  checkNullPass = false;

  constructor(
    private fb:FormBuilder,
    public router: Router
  ) { }

  forGot= this.fb.group ({
    "email": ["",[Validators.required,Validators.email]],
  })

  get f() {
    return this.forGot.controls
  }

  handleClear() {
    this.forGot.get('email')?.setValue('');

  }

  focus() {
    this.checkNullPass = false;
  }

  onSubmit() {
    this.forGot.value.email = this.forGot.value.email.toLowerCase();

    if (!this.forGot.valid) {
      if(!this.forGot.value.email) {
        this.checkNullPass = true;
      } else {
        this.checkNullPass = false;
      }
    } else {
      console.log(this.forGot.value);
      this.router.navigate(['confirm-otp']);
      setTimeout(() => {
        window.location.reload();
      },300)
    }

  }



  ngOnInit(): void {
  }

}
