import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { PostListingComponent } from './pages/post-listing/post-listing.component';
import { NotificationComponent } from './layout/header/notification/notification.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: PostListingComponent },
    { path: 'user', component: UserProfileComponent },
    { path: 'notification', component: NotificationComponent },
    { path: 'profileview', component: ProfileViewComponent }
  ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule {}
