import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { SocialComponent } from './social/social.component';
import { SectionClassComponent } from './section-class/section-class.component';
import { SectionForComponent } from './section-for/section-for.component';
import { SectionIfComponent } from './section-if/section-if.component';
import { SectionFormComponent } from './section-form/section-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    AsideComponent,
    NavComponent,
    SocialComponent,
    SectionClassComponent,
    SectionForComponent,
    SectionIfComponent,
    SectionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
