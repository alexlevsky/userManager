import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './service/users.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { DialogWindowEditUserComponent } from './dialog-window-edit-user/dialog-window-edit-user.component';
import { InternatiolizationModule } from './examples/internatiolization/internatiolization.module';
import { AngularMaterialModule } from './material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CustomPipeModule } from './examples/custom-pipe/custom-pipe.module';
import { CustomDirectiveModule } from './examples/custom-directive/custom-directive.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './examples/custom-directive/counter.reducer';
import { usersReducer } from './examples/custom-directive/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './examples/custom-directive/users.effects';
import {
  EntityMetadataMap,
  NgrxDataModule,
  DefaultDataServiceConfig
 } from 'ngrx-data';
import { NotificationsModule } from './examples/notifications/notifications.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, uk_UA } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { StatisticsModule } from './pages/statistics/statistics.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TableComponent } from './pages/table/table.component';
import { UsersComponent } from './pages/models/users/users.component';
import { PostsComponent } from './pages/models/posts/posts.component';
import { CommentsComponent } from './pages/models/comments/comments.component';
import { AlbumsComponent } from './pages/models/albums/albums.component';
import { PhotosComponent } from './pages/models/photos/photos.component';
import { TodosComponent } from './pages/models/todos/todos.component';

registerLocaleData(uk);

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/'
 };

export const entityMetadata: EntityMetadataMap = {
  Posts: {},
  Comments: {},
  Albums: {},
  Photos: {},
  Users: {},
  Todos: {}
 };

 export const pluralNames = { 
 Posts: 'posts',
 Comments: 'comments',
 Albums: 'albums',
 Photos: 'photos',
 Users: 'users',
 Todos: 'todos'
 };

@NgModule({
  declarations: [
    AppComponent,
    DialogWindowEditUserComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TableComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    InternatiolizationModule,
    AngularMaterialModule,
    NotificationsModule,
    CustomPipeModule,
    CustomDirectiveModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({  }),
    EffectsModule.forRoot([UsersEffects]),
    NgrxDataModule.forRoot({ entityMetadata, pluralNames }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    IconsProviderModule,
    NgZorroAntdModule,
    StatisticsModule
  ],
  providers: [
    UsersService,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: NZ_I18N, useValue: uk_UA }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogWindowEditUserComponent
  ]
})
export class AppModule { }
