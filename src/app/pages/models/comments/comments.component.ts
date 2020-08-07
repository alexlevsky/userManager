import { Component, OnInit } from '@angular/core';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfData: any[] = [];

  comments$: Observable<any[]>;
  commentsService: EntityCollectionService<any>;

  constructor(entityServices: EntityServices) {
    this.commentsService = entityServices.getEntityCollectionService('Comments');
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
    this.commentsService.update(this.editCache[id].data);
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
    let newComment = Object.assign( {}, this.listOfData[0], { name: 'default name', email: 'default@gmail.com', body: 'def body' });
    delete newComment.id;
    this.commentsService.add(newComment);
    this.ngOnInit();
  }

  delete(id: string): void {
    const deletedUser = this.listOfData.find(item => item.id === id);
    this.commentsService.delete(deletedUser);
  }


  ngOnInit(): void {
    this.comments$ = this.commentsService.entities$;
    this.commentsService.getAll().subscribe((el) => { this.listOfData = el; this.updateEditCache(); });
  }
}
