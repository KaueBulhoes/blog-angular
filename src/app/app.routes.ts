import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'post/:id', component: PostComponent },
  { path: '', component: HomeComponent }
];
