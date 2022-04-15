import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

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

  onSubmit() {
    console.log(this.forGot.value);
  }

  confirm() {
    console.log(this.forGot.value);
    this.router.navigate(['confirm-otp']);
    setTimeout(() => {
      window.location.reload();
    },300)
  }


  ngOnInit(): void {
  }

}
