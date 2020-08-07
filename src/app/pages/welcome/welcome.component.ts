import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public time = 0;
  public id = -1;
  public times = [];
  selectedValue = new Date('2017-01-25');
  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };
  isVisible = false;
  isConfirmLoading = false;

  constructor(private message: NzMessageService, private notification: NzNotificationService) {
   }

  ngOnInit() {
  }

  selectChange(select: Date): void {
    this.showModal();
    console.log(`Select value: ${select}`);
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  createNotifications(): void {
    this.notification.blank('Notification Title', 'Description.', {
      nzKey: 'key'
    });
  }

  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

  onChange(result: Date): void {
    console.log('Selected Time: ', this.times);
  }

  setTimers() {
    for (let t of this.times) {
      let diff = t.time - Date.now();
      setTimeout(() => {
        this.createMessage('success');
        console.log(t.time);
      }, diff );
    }
  }


  onOk(result: any): void {
    this.time = new Date(result).getTime();
    console.log('onOk', this.time);
  }

  addOne() {
    this.id++;
    this.times.push({'id': this.id, 'time': Date.now() });
    console.log('addOne func');
  }

}
