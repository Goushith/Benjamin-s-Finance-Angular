import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno="";
  pswd="";
  amount=""


  acno1="";
  pswd1="";
  amount1=""
  user=""
  sdate:any=" "
  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { 
    if(localStorage.getItem('currentUser')){
    this.user=JSON.parse(localStorage.getItem('currentUser')||'')
    // console.log(this.user);
  }
    this.sdate=new Date()
  }

  DepositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  WithdrawForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })


  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert('login first');
      this.router.navigateByUrl(''); 
    }

    // this.user=JSON.parse(localStorage.getItem('currentUser')||'')
    // console.log(this.user);
    
  }

  // deposit(){
  //   var acno=this.DepositForm.value.acno;
  //   var pswd=this.DepositForm.value.pswd;
  //   var amount=this.DepositForm.value.amount
  //   // alert('YOu have clicked ')
  //   if(this.DepositForm.valid){
      
  //   const result=this.ds.deposit(acno,pswd,amount)

    

  //   if(result){
  //     alert(`${amount} is credited... available balaance is ${result}`)
  //   }
  // }else{
  //   alert('invalid form')
  // }
  // }

  deposit(){

    // console.log(this.depositForm);

    // console.log(this.depositForm.get('acno')?.errors);
    
    


    var acno=this.DepositForm.value.acno;
    var pswd=this.DepositForm.value.pswd;
    var amount=this.DepositForm.value.amount;
    if(this.DepositForm.valid){

    this.ds.deposit(acno,pswd,amount)
    .subscribe((result:any)=>{
      alert(result.message);
      // this.router.navigateByUrl('deposit')

    },
    result=>{
      alert(result.error.message)
    }
    )

    }
  }



  withdraw(){
    var acno=this.WithdrawForm.value.acno;
    var pswd=this.WithdrawForm.value.pswd;
    var amount=this.WithdrawForm.value.amount;
    if(this.WithdrawForm.valid){

      this.ds.withdraw(acno,pswd,amount)
      .subscribe((result:any)=>{
        alert(result.message);
        // this.router.navigateByUrl('deposit')
  
      },
      result=>{
        alert(result.error.message)
      }
      )
  
      }
    }
  




logOut(){
// alert('gsg')
localStorage.removeItem('currentUser');
localStorage.removeItem('currentAcno');
localStorage.removeItem('token')
this.router.navigateByUrl('')
}

delete(){
  // alert('deleted')
  this.acno=JSON.parse(localStorage.getItem('currentAcno')|| '')
}
onCancel(){
  this.acno=''
}
onDelete(event:any){
  // alert(event)
  this.ds.deleteAcc(event)
  .subscribe((result:any)=>{
    alert(result.message)
    
    this.logOut()
    // this.router.navigateByUrl('')
  },
  result=>{
    alert('result.error.mesage')
  
  })
}

}


