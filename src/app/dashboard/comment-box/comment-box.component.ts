import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  comment = "";
  postComment : any = [];
  constructor() { }

  ngOnInit(){
   this.post();
  }

  post(){
   this.postComment.push(this.comment);
   this.comment = ""; 

  }

}
