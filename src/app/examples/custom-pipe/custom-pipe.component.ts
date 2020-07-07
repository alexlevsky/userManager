import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, deleteUser } from '../custom-directive/users.actions';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  public name = 'superhero';
  users$: Observable<any>;
  constructor(private store: Store<{ count: number, users: any }>) {
    this.users$ = store.pipe(select('users'));
  }

  ngOnInit() {

  }

  add_User() {
    this.store.dispatch(addUser());
  }
  delete_User() {
    this.store.dispatch(deleteUser());
  }

}
