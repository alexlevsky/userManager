import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveComponent } from './custom-directive.component';
import { ExampleDirective } from '../example.directive';
import { StructuralDirectiveDirective } from '../structural-directive.directive';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { usersReducer } from './users.reducer';


@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forRoot({ count: counterReducer, users: usersReducer }),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    // }),
  ],
  declarations: [
    CustomDirectiveComponent,
    ExampleDirective,
    StructuralDirectiveDirective
  ],
  exports: [
    CustomDirectiveComponent,
    ExampleDirective,
    StructuralDirectiveDirective
  ]
})
export class CustomDirectiveModule { }
