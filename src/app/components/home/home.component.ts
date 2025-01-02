import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../types/post.type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
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
