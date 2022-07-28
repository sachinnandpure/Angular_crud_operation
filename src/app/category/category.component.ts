import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user-data';
import { DataService } from '../data.service';
import { UserFetch } from '../user-fetch';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  userFormGroup: FormGroup;
  users: User[];
  user: UserFetch;

  constructor(private dataservice: DataService){}
  getgetCategory(){
    this.dataservice.getProducts().subscribe(data => {
      this.users = data;
    });
  }
  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        name : new FormControl(''),
        model : new FormControl('')
      },
    );
    this.getgetCategory();
}


addCategory() {
  this.dataservice.addProduct(this.userFormGroup.value).subscribe(data => {
    this.user = data;
    console.log(this.user);
  });
  this.getgetCategory();
}
}
