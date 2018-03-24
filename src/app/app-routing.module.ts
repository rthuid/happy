import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'user', component: UserProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), BrowserModule ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule {}
