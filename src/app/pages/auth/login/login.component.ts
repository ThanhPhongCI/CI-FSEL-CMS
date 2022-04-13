import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  formLogin = this.fb.group({
    "email":["",Validators.required,Validators.email],
    "password": ["",Validators.required,Validators.email]

  })
  get f() {
    return this.formLogin.controls
  }

  handleClear() {
    this.formLogin.get('email')?.setValue('');
    this.formLogin.get('password')?.setValue('');
  }



  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formLogin.value)
  }

}
