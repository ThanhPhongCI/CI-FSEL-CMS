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
    "passwordnew": ["",Validators.required,Validators.pattern('^[qwertyuioplkjhgfdsazxcvbnm1234567890]*$')],
  })

  get f() {
    return this.forGot.controls
  }

  handleClear() {
    this.forGot.get('passwordnew')?.setValue('');

  }


  ngOnInit(): void {
  }

}
