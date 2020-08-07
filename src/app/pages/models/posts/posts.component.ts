import { Component, OnInit } from '@angular/core';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfData: any[] = [];
  posts$: Observable<any[]>;
  postsService: EntityCollectionService<any>;

  constructor(entityServices: EntityServices) {
    this.postsService = entityServices.getEntityCollectionService('Posts');
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
    this.postsService.update(this.editCache[id].data);
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
    let newPost = Object.assign( {}, this.listOfData[0], { title: 'default title', body: 'default body' });
    delete newPost.id;
    this.postsService.add(newPost);
    this.ngOnInit();
  }

  delete(id: string): void {
    const deletedUser = this.listOfData.find(item => item.id === id);
    this.postsService.delete(deletedUser);
  }


  ngOnInit(): void {
    this.posts$ = this.postsService.entities$;
    this.postsService.getAll().subscribe((el) => { this.listOfData = el; this.updateEditCache(); });
  }
}
