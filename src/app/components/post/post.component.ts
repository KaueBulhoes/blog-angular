import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../types/post.type';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  postId: string | null = null;
  post: Post | null = null;

  constructor(private route: ActivatedRoute, private service: PostService) {}

  ngOnInit() {
    // Recuperar o id da URL através dos parametros listados, deve ser declarado na rota
    this.postId = this.route.snapshot.paramMap.get('id')

    if(this.postId) {
      this.service.getPostById(this.postId).subscribe(post => {this.post = post})
    }
  }
}
