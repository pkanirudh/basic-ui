import { Component, OnInit } from '@angular/core';
import { Credential } from '../credential';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: Credential = {userName: '', password: ''};
  status: string;
  constructor() { }

  ngOnInit() {
  }

  validate(){
    if(this.user.userName === 'blah' && this.user.password === 'blah')
    {
      this.status = 'valid user';
    } else{
      this.status = 'invalid user';
    }
  }

}
