import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipeComponent } from './custom-pipe.component';
import { ExamplePipe } from '../example.pipe';
import { StoreModule } from '@ngrx/store';
import { usersReducer, usersKey } from '../custom-directive/users.reducer';
import { counterReducer, countKey } from '../custom-directive/counter.reducer';

@NgModule({
   imports: [
      CommonModule,
      StoreModule.forFeature(usersKey, usersReducer),
      StoreModule.forFeature(countKey, counterReducer)
   ],
   declarations: [
      CustomPipeComponent,
      ExamplePipe
   ]
})
export class CustomPipeModule { }
