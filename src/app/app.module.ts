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
import { CarouselComponent } from './components/carousel/carousel.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { LeftMenusComponent } from './layout/left-menus/left-menus.component';
import { CreatePostComponent } from './pages/post-listing/create-post/create-post.component';
import { PostComponent } from './pages/post-listing/post/post.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { ModalLikeComponent } from './components/modal-like/modal-like.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserProfileComponent,
    PostListingComponent,
    NotificationComponent,
    MainSearchComponent,
    CarouselComponent,
    FooterComponent,
    LeftMenusComponent,
    CreatePostComponent,
    PostComponent,
    ProfileViewComponent,
    ModalLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
