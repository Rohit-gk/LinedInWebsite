import { Component, OnInit } from '@angular/core';
import { Connection } from 'src/app/Models/connection.model';
import { MyRequest } from 'src/app/Models/requests.model';
import { ApiService } from 'src/app/services/api.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-mynetwork',
  templateUrl: './mynetwork.component.html',
  styleUrls: ['./mynetwork.component.css']
})
export class MynetworkComponent implements OnInit {

  public request: any = {};
  
  constructor(private api:ApiService,private toaster:NgToastService) { }

  myrequest : MyRequest[] = [];
  connections: Connection[] =[];
  ngOnInit(){
   this.AllConnections();
   this.MyInvitations();
  }

  AllConnections(){
    this.api.AllNonFriendConnection().subscribe(
      response => {
        this.connections = response;
      }
    )
  }

  MyInvitations(){
    this.api.MyAllInvitaions().subscribe(
      response => {
        this.myrequest = response;
      }
    )
  }

  SendFriendRequests(requestId : any){
    this.api.SendFriendRequest(requestId).subscribe(
      response => {
        this.toaster.success({
          summary: 'Success',
          detail: 'Followed Successfully',
          duration: 4000,
        });
        this.request = response;
        console.log("Request", response);
        
      }
    )
  }

  AcceptOrRejectRequest(reqId:any,status:string){
    this.api.AcceptRejectRequest(reqId,status).subscribe(
      response => {
        this.toaster.success({
          summary: 'Success',
          detail: 'Now you are friends',
          duration: 4000,
        });
       // this.request = response;
        console.log("Request", response);
      }
    )
  }
}


