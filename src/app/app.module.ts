import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExtraSearchComponent } from './extra-search/extra-search.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoComponent } from './repo/repo.component';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    SearchPageComponent,
    NotFoundComponent,
    ExtraSearchComponent,
    ProfileComponent,
    RepoComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
