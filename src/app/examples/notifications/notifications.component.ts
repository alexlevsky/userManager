import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }
  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }
}
