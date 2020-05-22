import {Component, OnInit, AfterViewInit, OnChanges, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTable, MatTableDataSource} from '@angular/material';

import { UsersService } from './service/users.service';
import {DialogWindowEditUserComponent} from './dialog-window-edit-user/dialog-window-edit-user.component';
import { Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges {

  public users$: Observable<User[]>; // = JSON.parse(localStorage.getItem('Users'));
  public isLoadingResults = true;
  dataSource: MatTableDataSource<User>; // = new MatTableDataSource<User>([]);  // new MatTableDataSource(this._users.getUsers());
  @ViewChild(MatTable, {static: false}) mat: MatTable<any>;


  constructor(private _users: UsersService,  public dialog: MatDialog, private cd: ChangeDetectorRef) {
   }

  ngOnInit() {
  //  this.users = this._users.getUsers().subscribe((users: User[])  => {
  //     this.users = users;
  //     this.isLoadingResults = true;
  //   //  this.dataSource =  new MatTableDataSource<User>(users);
  //     this.mat.dataSource = new MatTableDataSource<User>(users);
  //    // debugger;
  //   });
    this.users$ = this._users.getUsers();
   // this.dataSource.data = this.users;
    this.cd.detectChanges();
  }

  ngOnChanges() {
  //   const self = this;
  // setTimeout(()=>{
  //   self.mat.renderRows();
  // }, 5000);
  }

  ngAfterViewInit() {
    console.log('ngAfterviewInit');
    this.cd.detectChanges();
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

