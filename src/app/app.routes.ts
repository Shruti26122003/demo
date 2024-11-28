import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';

export const routes: Routes = [
  {
    path : "user-page",
    component: UserComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path:"data-binding",
    component:DataBindingComponent
  }
];
