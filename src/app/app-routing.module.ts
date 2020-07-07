import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternatiolizationComponent } from './examples/internatiolization/internatiolization.component';
import { CustomPipeComponent } from './examples/custom-pipe/custom-pipe.component';
import { CustomDirectiveComponent } from './examples/custom-directive/custom-directive.component';


const routes: Routes = [
  { path: 'internatiolization', component: InternatiolizationComponent },
  { path: 'custompipe', component: CustomPipeComponent },
  { path: 'exampledirective', component: CustomDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
