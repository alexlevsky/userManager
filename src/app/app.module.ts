import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './service/users.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material";

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


@NgModule({
  declarations: [
    AppComponent,
    DialogWindowEditUserComponent
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
    CustomPipeModule,
    CustomDirectiveModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({  }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogWindowEditUserComponent
  ]
})
export class AppModule { }
