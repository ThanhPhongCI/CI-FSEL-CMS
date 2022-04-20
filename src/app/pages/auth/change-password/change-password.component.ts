import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  checkNullPass = false;
  checkNullPassTwo = false;
  checkPass = false;
  checkLength = false;

  constructor(
    private fb:FormBuilder,
  ) { }

  change = this.fb.group({
    "changePassword" : ["",[Validators.required,Validators.pattern(/^.{6,12}$/)]],
    "changePasswordTwo" : ["",[Validators.required,Validators.pattern(/^.{6,12}$/)]]
  })

  get f() {
    return this.change.controls
  }

  handleClear() {
    this.change.get('changePassword')?.setValue('');

  }

  handleClearTwo() {
    this.change.get('changePasswordTwo')?.setValue('');

  }

  focus() {
    this.checkNullPass = false;
  }


  focusTwo() {
    this.checkNullPassTwo = false;

  }


  onSubmit() {
    this.change.value.changePassword = this.change.value.changePassword.toLowerCase();
    this.change.value.changePasswordTwo = this.change.value.changePasswordTwo.toLowerCase();


    if(!this.change.valid) {
      if (!this.change.value.changePassword) {
        this.checkNullPass = true;
        if (!this.change.value.changePasswordTwo) {
          this.checkNullPassTwo = true;
        } else {
          this.checkNullPass = false;
        }
      } else if (!this.change.value.changePasswordTwo) {
        this.checkNullPassTwo = true;
        if (!this.change.value.changePassword) {
          this.checkNullPass = true;
        } else {
          this.checkNullPass = false;
        }
      }

    }else {
      console.log(this.change.value)
    }

  }

  ngOnInit(): void {
    this.change.valueChanges.subscribe(()=>{
      console.log(this.change.value.changePasswordTwo.length);
      if(this.change.value.changePasswordTwo.length>=6 && this.change.value.changePasswordTwo.length<= 12){
        this.checkLength = true;
      }else{
        this.checkLength = false;
      }
      if (this.change.value.changePassword === this.change.value.changePasswordTwo) {
        this.checkPass = true;
      } else {
          this.checkPass = false;

      }

    })
  }

}
