import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../models/address.model';
import { zip } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressService } from '../address.service';

@Component({
 selector:'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router,private addressService:AddressService) { }
  
  address=new Address();
activeIndex=-1;
 addressArray=[];

 
  addForm: FormGroup;
  ngOnInit(): void {
  //   this.addForm = this.formBuilder.group({
      
  //     name: ['', Validators.required],
  //     street: ['', Validators.required],
  //     city: ['', Validators.required],
  //     zip: ['', Validators.required]

  // });
 
    
} 

onSubmit():void{
  if(this.activeIndex == -1)
  {
  console.log("INSIDE SUBMIT");
this.addressArray.push(this.address);
this.address=new Address();
  }else
  {
this.addressArray.splice(this.activeIndex,1,this.address);
  }
  this.address=new Address();
  this.activeIndex=-1;
}

onDelete(j){
  this.addressArray.splice(j);
}

onEdit(add,index){
  
  console.log("Inside EDIT");
  // this.address=add;
  this.address=add;
  this.activeIndex=index;
  }
  
}
