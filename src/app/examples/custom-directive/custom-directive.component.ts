import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { increment, decrement, reset } from './counter.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, deleteUser } from './users.actions';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
  users: any;
  count$: Observable<number>;
  users$: Observable<any>;
  constructor(
              public usersService: UsersService,
              private store: Store<{ count: number, users: any }>
              ) {
    this.count$ = store.pipe(select('count'));
    this.users$ = store.pipe(select('users'));
   }

  ngOnInit() {
    // this.usersService.getLocalUsers().subscribe((res) => {
    //   console.log(res);
    //   this.users = res;
    // });
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }

  add_User() {
    this.store.dispatch(addUser());
  }
  delete_User() {
    this.store.dispatch(deleteUser());
  }
}
