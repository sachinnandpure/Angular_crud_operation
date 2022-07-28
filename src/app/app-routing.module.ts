import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetUserComponent } from './get-user/get-user.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'create', pathMatch: 'full'},
  {path: 'user', component: GetUserComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'delete', component: DeleteUserComponent},
  {path: 'category', component: CategoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
