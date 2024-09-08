import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../core/services/register.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  _FormBuilder = inject(FormBuilder)
  _RegisterService = inject(RegisterService)
  _ToastrService = inject(ToastrService)
  _RouterLink=inject(Router)
  isSubmit:boolean=false
  
  regsiterGroup:FormGroup=this._FormBuilder.group({
    name:[null,[Validators.required,Validators.minLength(3)  , Validators.maxLength(20)]],
    email:[null,[Validators.required]],
    password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
    age:[null,[Validators.required]],
    phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
 })

 SignUpSubmmit(){
  this.isSubmit=true

  this._RegisterService.SubmitRegistration(this.regsiterGroup.value).subscribe({
    next:(res)=>{
      if(res.msg=="done")
      console.log(res)
      console.log(this.regsiterGroup)
      this._ToastrService.success("account created succsesfuly")
      this._RouterLink.navigate(["/login"])
      this.isSubmit=false
     
    },error:(err)=>{
      console.log(err.error)
      this.isSubmit=false
    }
  })
 }
}
