import { Component, OnInit } from '@angular/core';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfData: any[] = [];

  photos$: Observable<any[]>;
  photosService: EntityCollectionService<any>;

  constructor(entityServices: EntityServices) {
    this.photosService = entityServices.getEntityCollectionService('Photos');
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
    this.photosService.update(this.editCache[id].data);
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
    let newPhoto = Object.assign( {}, this.listOfData[0],
       { albumId: 1, title: 'default title', url: 'default url', thumbnailUrl: 'default thumbnail' });
    delete newPhoto.id;
    this.photosService.add(newPhoto);
    this.ngOnInit();
  }

  delete(id: string): void {
    const deletedUser = this.listOfData.find(item => item.id === id);
    debugger;
    this.photosService.delete(deletedUser);
  }


  ngOnInit(): void {
    this.photos$ = this.photosService.entities$;
    this.photosService.getAll().subscribe((el) => { this.listOfData = el; this.updateEditCache(); });
  }
}
