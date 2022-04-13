import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    public router: Router
    ) { }


  formLogin = this.fb.group({
    "email":["",Validators.required,Validators.email,Validators.pattern('^[qwertyuioplkjhgfdsazxcvbnm1234567890]*$')],
    "password": ["",Validators.required,Validators.pattern('^[qwertyuioplkjhgfdsazxcvbnm1234567890]*$')],

  })



  get f() {
    return this.formLogin.controls
  }

  handleClear() {
    this.formLogin.get('email')?.setValue('');
    this.formLogin.get('password')?.setValue('');
  }

  forgot() {
    this.router.navigate(['forgot']);
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }



  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formLogin.value)
  }

}
