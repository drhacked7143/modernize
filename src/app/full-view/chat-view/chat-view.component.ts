import { Component, OnInit } from '@angular/core';
import { User } from 'src/data/interface';
import { User_Message } from 'src/data/schema';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent implements OnInit{
  ngOnInit(): void {
  this.contacts.map(item=>item.firstName = item.fullName?.split(' ')[0])
  }
  contacts: User[] = User_Message
  selectUser: User | undefined = this.contacts[0];
  selectContact(item: User) {
    this.selectUser = item
    console.log(this.selectUser);
  }
}
