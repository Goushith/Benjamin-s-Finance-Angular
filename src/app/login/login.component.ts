import { Component, OnInit } from '@angular/core';
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



  constructor(private ds:DataService,private router:Router) { }

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
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;

    const result=this.ds.login(acno,pswd);

    if(result){
      alert("Login Successful");
      this.router.navigateByUrl('dashboard')
    }else{
      alert('login Failed')
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


}
