import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UsersService } from './service/users.service';
import { FormControl, FormGroup,  Validators, NgForm } from '@angular/forms';
import {DialogWindowEditUserComponent} from "./dialog-window-edit-user/dialog-window-edit-user.component";
import {MatDialog} from "@angular/material/dialog";
// import { ControlGroup } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users;
  public name;
  public email;
  public city;
  public modUser =  { id: 0, name: "", email: "", address: { city: "" }};
  public newUser =  { id: 0, name: "", email: "", address: { city: "" }};
  public checkIfValid = false;
  public isNewUser = false;
  public isFormValid = true;
  displayedColumns: string[] = ['id', 'name', 'email', 'city', 'edit'];

  constructor(private _users: UsersService, private cdr: ChangeDetectorRef, public dialog: MatDialog) {
      this._users.getUsers().subscribe(users => this.users = users);
   }
  ngOnInit() {
      this._users.getUsers().subscribe(users => this.users = users);
  }
  createUser() {
    this.modUser = this.newUser;
    this.isNewUser = true;
    $('#myModal').modal('show');
  }
  submitUser(name, email, city) {
    console.log(name.value);
   this.checkIfValid = true;
   if (this.isFormValid) {
    let i = this.modUser.id - 1; 
    this.users[i].name = name.value;
    this.users[i].email = email.value;
    this.users[i].city = city.value;
   } else {
      return;
   }
   if (this.isNewUser) {
    this.users.push(this.modUser);
   }
  }

  openEditWindow(event, element){
   // console.log(event, element);

    const dialogRef = this.dialog.open(DialogWindowEditUserComponent, {
      width: '350px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  checkName(newUser, name) {
    if (name.status === 'INVALID') {
      this.isFormValid = false;
    } else {
      this.isFormValid = true;
    }
  }
  checkEmail(newUser, email) {
    if (email.status === 'INVALID') {
      this.isFormValid = false;
    } else {
      this.isFormValid = true;
    }
  }


  editUser(user) {
    this.isNewUser = false;
    this.modUser = user;
    $('#myModal').modal('show');
  }
}
