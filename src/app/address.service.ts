import { Injectable } from '@angular/core';
import { Address } from './models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }
  private listAddress:Address[]=[];
  getAddress():Address[]{
return this.listAddress;
  }

  add(address:Address){
    this.listAddress.push(address);

  }
}
