import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:Object;  
  constructor(

    private authService:AuthService,
    ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data=>{
     this.user = data.user;
        //  console.log(this.user);
        //  console.log(data.user.name);

         
    });
  }
 
  
}
