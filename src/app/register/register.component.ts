import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  uname:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  ngOnInit(): void {
  }

  
  register(){
    console.log(this.registrationForm);
    
    // alert('register clicked')


    // console.log(this.registrationForm.get('uname')?.errors);
    
    var uname=this.registrationForm.value.uname;
    var pswd =this.registrationForm.value.pswd;
    var acno=this.registrationForm.value.acno;
    if(this.registrationForm.valid){

    
      // console.log(this.registrationForm.get('username')?.errors);
      this.ds.register(acno,uname,pswd)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')
    },
    result=>{
      
      
      alert(result.error.message)
    })
  }
  }

}
