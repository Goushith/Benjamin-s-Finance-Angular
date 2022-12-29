import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
 @Input() item :string|undefined;
 @Output() onCancel= new EventEmitter();
 @Output () onDelete=new EventEmitter();
 //input is used to hold data  from parent

  constructor() { }

  ngOnInit(): void {
  }



delete(){
  this.onDelete.emit(this.item)
  // alert('Delete  Account')
}

cancel(){
this,this.onCancel.emit();
}

}

