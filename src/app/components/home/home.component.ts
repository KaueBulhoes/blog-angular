import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../types/post.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  posts: Post[] = [];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAllPosts().subscribe(posts => {this.posts = posts})
  }
}
