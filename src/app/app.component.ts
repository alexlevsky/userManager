import {Component, OnInit, AfterViewInit, OnChanges, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTable, MatTableDataSource} from '@angular/material';

import { UsersService } from './service/users.service';
import {DialogWindowEditUserComponent} from './dialog-window-edit-user/dialog-window-edit-user.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges {

  public users = JSON.parse(localStorage.getItem('Users'));
  public isLoadingResults = true;
  public dataSource;
  @ViewChild(MatTable, {static: false}) mat: MatTable<any>;


  constructor(private _users: UsersService,  public dialog: MatDialog) {
      
      this._users.getUsers().subscribe(users => {
        this.users = users;
      //  localStorage.setItem('Users', JSON.stringify(this.users));
        this.dataSource = new MatTableDataSource(users);
        this.isLoadingResults = true;
      });
     //this.dataSource = new MatTableDataSource(_users.getUsers());
   }

  ngOnInit() {

  }

  ngOnChanges() {
  //   const self = this;
  // setTimeout(()=>{
  //   self.mat.renderRows();
  // }, 5000);
   
  }

  ngAfterViewInit() {
    console.log('ngAfterviewInit');
  }


  openEditWindow(event, element) {
    const dialogRef = this.dialog.open(DialogWindowEditUserComponent, {
      width: '355px',
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

