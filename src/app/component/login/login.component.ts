import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  _FormBuilder = inject(FormBuilder)
  _LoginrService = inject(LoginService)
  _RouterLink=inject(Router)
  isSubmit:boolean=false
  
 LoginGroup:FormGroup=this._FormBuilder.group({ 
    email:[null,[Validators.required]],
    password:[null,[Validators.required]],
 })

 SignUpSubmmit(){
  this.isSubmit=true
  this._LoginrService.PostLoign(this.LoginGroup.value).subscribe({
    next:(res)=>{
      if(res.msg=="done")
      console.log(res)
      console.log(this.LoginGroup)
      localStorage.setItem("UserToken",res.token)
      this._RouterLink.navigate(["/notehome"])
      this.isSubmit=false
     
    },error:(err)=>{
      console.log(err.error)
      this.isSubmit=false
    }
  })
 }
}
