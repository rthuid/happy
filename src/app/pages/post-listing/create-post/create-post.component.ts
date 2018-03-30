import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
 addclass = 'isSubmitting';
  constructor() {
    // const addclass = '!isSubmitting';
   }

  ngOnInit() {
    // const addclass = 'isSubmitting';
  }
  clickCreatePost() {
    // const addclass = 'isSubmitting';
  }
}
