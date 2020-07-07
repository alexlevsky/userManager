import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-internatiolization',
  templateUrl: './internatiolization.component.html',
  styleUrls: ['./internatiolization.component.css']
})
export class InternatiolizationComponent implements OnInit {
  language = new FormControl();
  languageList: string[] = ['ukrainian', 'english'];
  selectedLanguage: string;
  constructor(public translate: TranslateService) {
    this.selectedLanguage = this.languageList[0];
    translate.addLangs(['en', 'uk']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    
  }

  selectLanguage(event: any) {
    this.selectedLanguage = event.value;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
