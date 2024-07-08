import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm:FormGroup=new FormGroup({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null ,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z]{3,5}/)]),
    age:new FormControl(null,[Validators.required,Validators.min(13),Validators.max(60)]),
  })
  constructor(private authService:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(form:FormGroup){
    
        this._router.navigate(["/login"]);  
      
    
  }

}
