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
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
})
  
  ngOnInit(): void {
  }


acnoChange(event:any){
  console.log(event)
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
    var userDetails=this.ds.userDetails;
if(this.loginForm.valid){



    const result=this.ds.login(acno,pswd);

    if(result){
      alert("Login Successful");
      this.router.navigateByUrl('dashboard')
    }else{
      alert('login Failed')
    }
  }else{
    alert('invalid Form')
  }
}

}



//   login(){
//     // alert('Login Clicked')
//     var acno=this.acno;
//     var pswd=this.pswd;
//     var userDetails=this.ds.userDetails;


//     if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert('login Successfull')
//       this.router.navigateByUrl('dashboard')
//     }else{
//       alert('invalid password')
//     }



//   }
// else{
//   alert('invalid user details')
// }
//   }


// login(a:any,b:any){
//   // alert('Login Clicked')
//   var acno=a.value;
//   var pswd=b.value;
//   var userDetails=this.userDetails;


//   if(acno in userDetails){
//   if(pswd==userDetails[acno]['password']){
//     alert('login Successfull')
//   }else{
//     alert('invalid password')
//   }



// }
// else{
// alert('invalid user details')
// }
// }



