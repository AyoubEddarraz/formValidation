import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/interfaces/register';
import { GlobalFlashMessagesService } from 'src/app/services/global-flash-messages.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // password
  showPassWord : boolean =  false;
  PassWord : string = "password";
  ConfirmePasswordCorrect : boolean = false;

  // email
  emailCorrect : boolean = false;

  // register Success
  registerSuccess : boolean = false;

  constructor(private flashMessage : GlobalFlashMessagesService , private route : Router) { }

  ngOnInit(): void {
    this.validateEmail();
    this.validateConfirmePassword();
  }

  // register form , type is Register Module or Interface (register.ts)
  register : Register = {
    name: "",
    email: "",
    password: "",
    confirmePassword: "",
    agree : false
  }

  // redirect user to home page if register Success
  Register = (registerForm) => {
    this.flashMessage.flashMessageSuccess(`bienvenue ${this.register.name}` , 2000);
    this.registerSuccess = true;
    // this time out like Emulator the request
    setTimeout(() => {
      this.route.navigate(['/registerSuccess']);
    }, 2000);
  }

  // Show Password
  ShowPassWord = () => this.PassWord = `${this.showPassWord ? 'text' : 'password'}`

  // validate Email
  validateEmail = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.register.email.match(pattern)) this.emailCorrect = true
    else this.emailCorrect = false
  }

  // validate password
  validateConfirmePassword = () => {
    if(this.register.confirmePassword === this.register.password) this.ConfirmePasswordCorrect = true;
    else this.ConfirmePasswordCorrect = false;
  }


}
