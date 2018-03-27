import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PostListingComponent } from './pages/post-listing/post-listing.component';
import { NotificationComponent } from './layout/header/notification/notification.component';

const routes: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'home', component: PostListingComponent },
  { path: 'notification', component: NotificationComponent },
  { path: '', component: PostListingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule {}
