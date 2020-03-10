import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-window-edit-user',
  templateUrl: './dialog-window-edit-user.component.html',
  styleUrls: ['./dialog-window-edit-user.component.scss']
})
export class DialogWindowEditUserComponent implements OnInit {
  private userForm;

  constructor(
    public dialogRef: MatDialogRef<DialogWindowEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.userForm = this.fb.group({
      name: [this.data.name,   Validators.required  ],
      email: [this.data.email, Validators.required
                               //Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
             ],
      city: [this.data.address.city]
    });

  }

onOkClick(): void {
    if(this.userForm.valid){
    this.data.name = this.userForm.get('name').value;
    this.data.email = this.userForm.get('email').value;
    this.data.address.city = this.userForm.get('city').value;
    }
}

onNoClick(): void {
    this.dialogRef.close();
  }
}
