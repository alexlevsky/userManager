import { Component, OnInit } from '@angular/core';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfData: any[] = [];

  users$: Observable<any[]>;
  usersService: EntityCollectionService<any>;

  constructor(entityServices: EntityServices) {
    this.usersService = entityServices.getEntityCollectionService('Users');
  }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.usersService.update(this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  add(): void {
    let newUser = Object.assign( {}, this.listOfData[0], { name: 'default name', email: 'default@gmail.com', phone: '56443423345' });
    delete newUser.id;
    this.usersService.add(newUser);
    this.ngOnInit();
  }

  delete(id: string): void {
    const deletedUser = this.listOfData.find(item => item.id === id);
    this.usersService.delete(deletedUser);
  }


  ngOnInit(): void {
    this.users$ = this.usersService.entities$;
    this.usersService.getAll().subscribe((el) => { this.listOfData = el; this.updateEditCache(); });
  }
}
