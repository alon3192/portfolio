import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyselfComponent } from './myself/myself.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';


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
    HomeComponent,
    MyselfComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
