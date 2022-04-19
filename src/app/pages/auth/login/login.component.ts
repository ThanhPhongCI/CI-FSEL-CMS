import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkNullAdmin = false;
  checkNullPass = false;

  constructor(
    private fb:FormBuilder,
    public router: Router
    ) { }


  formLogin = this.fb.group({
    "email":["",[Validators.required,Validators.email]],
    "password": ["",[Validators.required]],

  })



  get f() {
    return this.formLogin.controls
  }

  handleClear() {
    this.formLogin.get('email')?.setValue('');

  }
  handleClearTwo() {
    this.formLogin.get('password')?.setValue('');
  }

  forgot() {
    this.router.navigate(['forgot']);
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  focus() {
    this.checkNullAdmin = false;

  }

  focusTwo() {
    this.checkNullPass = false;
  }




  ngOnInit(): void {
  }

  onSubmit() {
    this.formLogin.value.email = this.formLogin.value.email.toLowerCase();

  if(!this.formLogin.valid){
    if (!this.formLogin.value.email) {
      this.checkNullAdmin = true;
      if (!this.formLogin.value.password) {
        this.checkNullPass = true;
      } else {
        this.checkNullPass = false;
      }
    } else if (!this.formLogin.value.password) {
      this.checkNullPass = true;
      if (!this.formLogin.value.email) {
        this.checkNullAdmin = true;
      } else {
        this.checkNullAdmin = false;
      }
    } else{



    }
  }else{
    console.log(this.formLogin.value)

  }

    // if (!this.formLogin.value.email && !this.formLogin.value.password) {
    //   this.checkNullAdmin = true;
    //   this.checkNullPass = true;
    // }



  }

}
