import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Data } from '@angular/router';
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
  constructor(private fb:FormBuilder, private ds:DataService) { 
    this.user=this.ds.currentUser
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
  }

  deposit(){
    var acno=this.DepositForm.value.acno;
    var pswd=this.DepositForm.value.pswd;
    var amount=this.DepositForm.value.amount
    // alert('YOu have clicked ')
    if(this.DepositForm.valid){
    const result=this.ds.deposit(acno,pswd,amount)

    

    if(result){
      alert(`${amount} is credited... available balaance is ${result}`)
    }
  }else{
    alert('invalid form')
  }
  }

  
  withdraw(){
    var acno=this.WithdrawForm.value.acno;
    var pswd=this.WithdrawForm.value.pswd;
    var amount=this.WithdrawForm.value.amount;
    if(this.WithdrawForm.valid){
    // alert('YOu have clicked ')
    
    const result=this.ds.withdraw(acno,pswd,amount)

    

    if(result){
      alert(`${amount} is debited... available balance is ${result}`)
    }
  }else{
    alert('invalid form')
  }
}
}
