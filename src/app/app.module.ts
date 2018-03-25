import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PostListingComponent } from './pages/post-listing/post-listing.component';
import { NotificationComponent } from './layout/header/notification/notification.component';
import { MainSearchComponent } from './layout/header/main-search/main-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    PostListingComponent,
    NotificationComponent,
    MainSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
