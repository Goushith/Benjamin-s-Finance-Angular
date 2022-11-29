import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno:any;

  transaction:any;


  constructor(private ds:DataService) {
    this.acno=this.ds.currentAcno;
    this.transaction=this.ds.getTranasaction(this.acno)
    console.log(this.transaction);
    

   }
 

  ngOnInit(): void {
  }

}
