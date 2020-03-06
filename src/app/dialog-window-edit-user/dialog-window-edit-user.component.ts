import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-window-edit-user',
  templateUrl: './dialog-window-edit-user.component.html',
  styleUrls: ['./dialog-window-edit-user.component.scss']
})
export class DialogWindowEditUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogWindowEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
