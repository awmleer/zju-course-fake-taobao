import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { ContentComponent } from './content/content.component';
import { SitesBarComponent } from './sites-bar/sites-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSearchComponent,
    ContentComponent,
    SitesBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
