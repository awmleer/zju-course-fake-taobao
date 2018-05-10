import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { ContentComponent } from './content/content.component';
import { SitesBarComponent } from './sites-bar/sites-bar.component';
import { NguCarouselModule } from '@ngu/carousel';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSearchComponent,
    ContentComponent,
    SitesBarComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    NguCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
