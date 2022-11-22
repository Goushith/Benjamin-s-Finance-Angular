import { Component, OnInit } from '@angular/core';

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


//data base
userDetails:any={
  1000:{acno:1000,username:"Amal",password:1000,balance:1000},
  1001:{acno:1001,username:"Amal",password:1001,balance:1000},
  1002:{acno:1002,username:"Amal",password:1002,balance:1000},

}
  constructor() { }

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

//   login(){
//     // alert('Login Clicked')
//     var acno=this.acno;
//     var pswd=this.pswd;
//     var userDetails=this.userDetails;


//     if(acno in userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert('login Successfull')
//     }else{
//       alert('invalid password')
//     }



//   }
// else{
//   alert('invalid user details')
// }
//   }


login(a:any,b:any){
  // alert('Login Clicked')
  var acno=a.value;
  var pswd=b.value;
  var userDetails=this.userDetails;


  if(acno in userDetails){
  if(pswd==userDetails[acno]['password']){
    alert('login Successfull')
  }else{
    alert('invalid password')
  }



}
else{
alert('invalid user details')
}
}


}
