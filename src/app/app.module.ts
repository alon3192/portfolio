import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectImageComponent } from './subject-image/subject-image.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ViewSafunComponent } from './view-safun/view-safun.component';
import { ViewGamefillComponent } from './view-gamefill/view-gamefill.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectImageComponent,
    CardProjectComponent,
    AboutMeComponent,
    FooterComponent,
    ViewSafunComponent,
    ViewGamefillComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
