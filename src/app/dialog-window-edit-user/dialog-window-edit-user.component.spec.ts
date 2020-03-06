import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWindowEditUserComponent } from './dialog-window-edit-user.component';

describe('DialogWindowEditUserComponent', () => {
  let component: DialogWindowEditUserComponent;
  let fixture: ComponentFixture<DialogWindowEditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWindowEditUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWindowEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
