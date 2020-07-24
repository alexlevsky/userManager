import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { increment, decrement, reset } from './counter.actions';
import { Store, select } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { addUser, deleteUser } from './users.actions';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { mapTo, map, pluck, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDirectiveComponent implements OnInit {
  users: any;
  count$: Observable<number>;
  users$: Observable<any>;

  posts$: Observable<any[]>;
  comments$: Observable<any[]>;
  todos$: Observable<any[]>;
  postsService: EntityCollectionService<any>;
  commentsService: EntityCollectionService<any>;
  todosService: EntityCollectionService<any>;
  constructor(
              public usersService: UsersService,
              private store: Store<{ count: number, users: any }>,
              entityServices: EntityServices
              ) {
    this.postsService = entityServices.getEntityCollectionService('Posts');
    this.commentsService = entityServices.getEntityCollectionService('Comments');
    this.todosService = entityServices.getEntityCollectionService('Todos');
    this.count$ = store.pipe(select('count'));
    this.users$ = store.pipe(select('users'));
   }

  ngOnInit() {
  this.posts$ = this.postsService.entities$;
  this.postsService.errors$.subscribe(err => console.log(err));
  this.comments$ = this.commentsService.entities$;
  this.todos$ = this.todosService.entities$;
  this.postsService.getWithQuery('userId=3');
  this.commentsService.getAll();
  this.todosService.getAll();
  //  this.store.dispatch({ type: '[Users Component] Get Remote User' });
    // this.usersService.getLocalUsers().subscribe((res) => {
    //   console.log(res);
    //   this.users = res;
    // });
  }


  addPost() {
    this.postsService.add({
      'userId': 20,
      'id': 101,
      'title': 'any title',
      'body': 'any body'
    });
  }

  deletePost() {
    this.postsService.delete({
      'userId': 20,
      'id': 101,
      'title': 'any title',
      'body': 'any body'
    });
  }

  addComment() {
    this.commentsService.add({
      'postId': 102,
      'id': 500,
      'name': 'id labore ex laborum',
      'email': 'Eliseo@gard.biz',
      'body': 'laudantium accusantium'
    });
  }

  deleteComment() {
    this.commentsService.delete({
      'postId': 102,
      'id': 500,
      'name': 'id labore ex laborum',
      'email': 'Eliseo@gard.biz',
      'body': 'laudantium accusantium'
    });
  }

  addTodo() {
    this.todosService.add({
      'userId': 10,
      'id': 205,
      'title': 'ipsam qui',
      'completed': true
    });
  }

  deleteTodo() {
    this.todosService.delete({
      'userId': 10,
      'id': 205,
      'title': 'ipsam qui',
      'completed': true
    });
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
