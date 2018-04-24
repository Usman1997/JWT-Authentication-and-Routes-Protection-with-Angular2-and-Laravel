import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:String;
email:String;
password:String;
  constructor(
private validateService:ValidateService,
private authService :AuthService,
private router :Router,

  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name:this.name,
      email:this.email,
      password:this.password
    }

    if(!this.validateService.validateUser(user)){
      console.log('Please fill all the fields');
      return false;
    }
     if(!this.validateService.validateEmail(user.email)){
    console.log('Please enter valid email');
    return false;
     }
     this.authService.registerUser(user).subscribe(data=>{
       if(data.success){
         console.log('You are now registered. You may log in');
         this.router.navigate (['/login']);
       }else{
        console.log('You are not register');
        this.router.navigate (['/register']);
       }
     });
     
  }
}
