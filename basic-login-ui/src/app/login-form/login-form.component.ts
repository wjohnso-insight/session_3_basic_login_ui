import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  username = '';
  password = '';

  ngOnInit(): void {
  }
  
  submitForm(): void{
    console.log(`${this.username}, ${this.password}`)
  }
}
