import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { User } from '../user-data';
import { UserFetch } from '../user-fetch';



@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html'
})
export class GetUserComponent implements OnInit {


  displayData: boolean;
  user: UserFetch;
  users: User[] = [];
  constructor(private dataservice: DataService){}
  getProducts(){
    this.dataservice.getProducts().subscribe(data => {
      this.users = data;
     
    })
  
  }
  fetchId = 0;

  getProduct(id) {
    this.dataservice.getProduct(id).subscribe(data => {
      this.user = data;
     this.displayData=true;
    }, (err) => {
      console.log("Product Not found");
    });
  }

  idtoUpdate = 0;
  updateUser() {
    this.dataservice.getProduct(this.idtoUpdate).subscribe(data => {
      this.user = data;
      this.user.model = 'Updated Model';
      this.dataservice.updateProduct(this.user).subscribe(data1 => {
        this.getProducts();
      });
    });
  }


  ngOnInit() {
    this.getProducts();
   // this.getProduct();
  }

}
