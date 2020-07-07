import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternatiolizationComponent } from './internatiolization.component';
import { AngularMaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useFactory: TranslationLoaderFactory, deps: [HttpClient]}
})
  ],
  declarations: [InternatiolizationComponent]
})
export class InternatiolizationModule { }
