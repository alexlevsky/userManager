import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TableComponent } from './pages/table/table.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UsersComponent } from './pages/models/users/users.component';
import { PostsComponent } from './pages/models/posts/posts.component';
import { CommentsComponent } from './pages/models/comments/comments.component';
import { AlbumsComponent } from './pages/models/albums/albums.component';
import { PhotosComponent } from './pages/models/photos/photos.component';
import { TodosComponent } from './pages/models/todos/todos.component';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'statistics', loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule) },
  {path: 'login', component: LoginPageComponent},
  {path: 'table', component: TableComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'model/users', component: UsersComponent},
  {path: 'model/posts', component: PostsComponent},
  {path: 'model/comments', component: CommentsComponent},
  {path: 'model/albums', component: AlbumsComponent},
  {path: 'model/photos', component: PhotosComponent},
  {path: 'model/todos', component: TodosComponent},
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
