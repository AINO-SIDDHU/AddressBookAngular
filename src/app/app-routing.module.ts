import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddAddressComponent } from './add-address/add-address.component';


const routes: Routes = [
  { path: 'AddAddress', component: AddAddressComponent },
   { path: '', redirectTo : '/AddAddress'  , pathMatch: 'full' }  
];

@NgModule({
  imports: [CommonModule,  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
