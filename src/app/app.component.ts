import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data/data.service';
import { PageService } from './features/pagination/page.service';

import { Message } from './data/message';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription;
  public allMessages: Array<Message>;
  public messages: Array<Message>;
  public totalMessages: number;
  constructor(private dataService: DataService, private pageService: PageService) { }

  ngOnInit() {
    this.fetchMails();
  }

  private fetchMails() {
    this.dataService.getMails().subscribe(
      (data: Message[]) => {
      const dataMessage = data['inbox_messages'];
      this.allMessages = [];
      if (dataMessage && dataMessage.length) {
        this.allMessages = dataMessage.map(item => {
          return {
            attachments: item.message.attachments,
            bccAddress: item.message.bcc_address,
            fromEmail: item.message.from_email,
            fromName: item.message.from_name,
            html: item.message.html,
            images: item.message.images,
            important: item.message.important,
            subject: item.message.subject,
            text: item.message.text
          }
        });
      }
      this.subscription = this.pageService.pageControl.subscribe(position => {
        this.setMessages(position.startPosition, position.endPosition);
      })
    });
  }

  public setMessages(startPosition, endPosition) {
    this.messages = this.allMessages.slice(startPosition - 1, endPosition);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
