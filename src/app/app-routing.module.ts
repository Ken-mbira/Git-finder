import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'search', component: SearchPageComponent},
  { path: 'landing', component: ProfileComponent},
  { path: 'not-found', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
