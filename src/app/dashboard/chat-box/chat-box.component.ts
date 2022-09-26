import * as io from 'socket.io-client';
import { Component, VERSION, AfterViewChecked, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Message, STATUSES } from 'src/app/Models/model';
import { USERS } from 'src/app/Models/data';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
 

  statuses = STATUSES;
  activeUser:any;
  users = USERS;
  expandStatuses = false;
  expanded = false;
  messageReceivedFrom = {
    img: 'https://cdn.livechat-files.com/api/file/lc/img/12385611/371bd45053f1a25d780d4908bde6b6ef',
    name: 'Media bot'
  }

  constructor(private myScrollContainer: ElementRef){}
  
    

    ngOnInit() { 
      this.setUserActive(USERS[0])
        this.scrollToBottom();
    }
        ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 

  addNewMessage(inputField:any) {
    const val = inputField.value?.trim()
    if (val.length) {
      this.activeUser.messages.push({type: 'sent', message: val})
      this.activeUser.ws.send(
        JSON.stringify({id: this.activeUser.id, message: val})
        );
    }
    inputField.value = '';
  }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }

    setUserActive(user:any) {
      this.activeUser = user;
      this.connectToWS();
    }

    connectToWS() {
      if (this.activeUser.ws && this.activeUser.ws.readyState !== 1) {
        this.activeUser.ws = null;
        this.activeUser.status = STATUSES.OFFLINE;
      }
      if (this.activeUser.ws) {
        return;
      }
      const ws = new WebSocket('wss://compute.hotelway.ai:4443/?token=TESTTOKEN');
      this.activeUser.ws = ws;
      ws.onopen = (event) => this.onWSEvent(event, STATUSES.ONLINE);
      ws.onclose = (event) => this.onWSEvent(event, STATUSES.OFFLINE);
      ws.onerror = (event) => this.onWSEvent(event, STATUSES.OFFLINE);
      ws.onmessage = (result: any) => {
        const data = JSON.parse(result?.data || {});
        const userFound = this.users.find(u => u.id === data.id);
        if (userFound) {
          userFound.messages.push(
             new Message('replies', data.message)
          )
        }
      };
    }

    onWSEvent(event:any, status: STATUSES) {
      this.users.forEach(u => u.ws === event.target ? u.status = status : null)
    }
}






















  // messages = [
  //   { text: "bla", authorId: 'Domka' }
  // ];

  // textareaValue = '';
  // isOpen = false;

  // connection : any;
  // constructor() {
  //   this.connection = io.connect('https://socket-chat-server-zbqlbrimfj.now.sh');
  //   this.connection.on('chat message',(message:any) => this.messages.push(message));
  //  }

  // ngOnInit(){
  // }

  // openChat() {
  //   this.isOpen = true;
  // }

  // closeChat() {
  //   this.isOpen = false;
  // }

  // sendMessage() {
  //   if (this.textareaValue.trim() !== "") {
  //     this.connection.emit('chat message', { text: this.textareaValue, authorId: "Domka" });
  //     this.textareaValue = '';
  //   }
  // }

