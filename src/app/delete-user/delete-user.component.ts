import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user-data';
import { UserFetch } from '../user-fetch';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html'
})
export class DeleteUserComponent implements OnInit {
  users: User[];
  user: UserFetch;
  displayData: boolean;


  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getProducts();
   // this.getUser();
   // this.deleteProduct();
  }
 idtodelete=0;
  deleteProduct(id) {
 
    this.dataservice.deleteProduct(id).subscribe(data => {
      this.getProducts();
    });
  }

  getProducts(){
    this.dataservice.getProducts().subscribe(data => {
      this.users = data;
    });
  }
   fetchId=1;
   getProduct() {
    this.dataservice.getProduct(this.fetchId).subscribe(data => {
       this.user = data;
      this.displayData=true;
      });
    }
}
