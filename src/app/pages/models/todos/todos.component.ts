import { Component, OnInit } from '@angular/core';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfData: any[] = [];

  todos$: Observable<any[]>;
  todosService: EntityCollectionService<any>;

  constructor(entityServices: EntityServices) {
    this.todosService = entityServices.getEntityCollectionService('Todos');
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
    this.todosService.update(this.editCache[id].data);
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
    let newTodo = Object.assign( {}, this.listOfData[0], { title: 'default title', completed: 'false' });
    delete newTodo.id;
    this.todosService.add(newTodo);
    this.ngOnInit();
  }

  delete(id: string): void {
    const deletedUser = this.listOfData.find(item => item.id === id);
    this.todosService.delete(deletedUser);
  }


  ngOnInit(): void {
    this.todos$ = this.todosService.entities$;
    this.todosService.getAll().subscribe((el) => { this.listOfData = el; this.updateEditCache(); });
  }
}
