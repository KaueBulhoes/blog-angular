import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../types/post.type';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiUrl = `https://jsonplaceholder.typicode.com/posts`

  getPostById(id: string): Observable<Post | null> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`)
    // return this.http.get<Post>(`${this.apiUrl}/${id}}`)
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }
}
