import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
acno="";
pswd="";
uname="";

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

//registration model
registrationForm=this.fb.group({
  acno:'',
  uname:'',
  pswd:''
})

  ngOnInit(): void {
  }
  register(){
    console.log(this.registrationForm);
    
    // alert('register clicked')
    var uname=this.registrationForm.value.uname;
    var pswd =this.registrationForm.value.pswd;
    var acno=this.registrationForm.value.acno;

    const result=this.ds.register(acno,uname,pswd);
    if(result){
      alert('register successful')
      this.router.navigateByUrl('')
    }else{
      alert('User already registred')
      this.router.navigateByUrl('register')
    }
  }

}
