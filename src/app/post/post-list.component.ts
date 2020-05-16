import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Post[];
  posts2:Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      console.log("test");
      this.posts = data;
      console.log(this.posts);

    });

  }


  logComments(id:string) {
    this.postService.getPosts2(+id).subscribe((data) => {
      console.log("test2");
      this.posts2 = data;
      console.log(this.posts);

    });
  }


}
