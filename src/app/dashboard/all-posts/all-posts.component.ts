import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Models/post.models';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private api: ApiService,private router:Router) { }

  filterTerm!: string;
  posts: Post[] = [];
  p: number = 1;
  total: number = 0;

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.api.AllPosts().subscribe(
      response => {
        this.posts = response;
      }
    )
  }

  deletePost(id: any) {
    if (confirm("Are you sure to delete " + id)) {
      this.api.deletePost(id).subscribe(response => {
        location.reload();
      })
    }
  }

  goToPostEdit(id:any){
    this.router.navigate([`/dashboard/updatepost/${id}`])
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getPosts();
  }
}
