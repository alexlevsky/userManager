import { Component, OnInit } from '@angular/core';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfData: any[] = [];

  albums$: Observable<any[]>;
  albumsService: EntityCollectionService<any>;

  constructor(entityServices: EntityServices) {
    this.albumsService = entityServices.getEntityCollectionService('Albums');
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
    this.albumsService.update(this.editCache[id].data);
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
    let newAlbum = Object.assign( {}, this.listOfData[0], { title: 'default title' });
    delete newAlbum.id;
    this.albumsService.add(newAlbum);
    this.ngOnInit();
  }

  delete(id: string): void {
    const deletedUser = this.listOfData.find(item => item.id === id);
    this.albumsService.delete(deletedUser);
  }


  ngOnInit(): void {
    this.albums$ = this.albumsService.entities$;
    this.albumsService.getAll().subscribe((el) => { this.listOfData = el; this.updateEditCache(); });
  }
}
