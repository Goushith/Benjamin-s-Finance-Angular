import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="Your Perfect Banking Partner"
account="Enter your Account Here"
acno=""
pswd=""



  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

loginForm=this.fb.group({
  acno:["",[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
})
  
  ngOnInit(): void {
  }


acnoChange(event:any){
  // console.log(event)
  this.acno=event.target.value;
  console.log(this.acno);
  
}

pswdChange(event:any){
  // console.log(event);
  this.pswd=event.target.value;
  console.log(this.pswd)

}


login(){
    var acno=this.loginForm.value.acno;
    var pswd=this.loginForm.value.pswd;
    // var userDetails=this.ds.userDetails;

    
if(this.loginForm.valid){



this.ds.login(acno,pswd)
.subscribe((result:any)=>{
  localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
  localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
  localStorage.setItem('token',JSON.stringify(result.token))

alert(result.message);
this.router.navigateByUrl('dashboard')

},
result=>{
alert(result.error.message);
}
)


  }
}

}







