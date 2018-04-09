import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.scss']
})
export class DetailedPostComponent implements OnInit {
  closeResult: string;
  toggleCommented = false;
  likeCount = 12;
  toggleLike = false;
  liketext = ' Like';
  toggleFollowed = false;
  followtext = ' Follow';
  commentWrapOfst = 0;
  constructor(private modalService: NgbModal, private elRef: ElementRef) {}

  ngOnInit() {
  }
  // toggleCommented
  toggleComment() {
    this.toggleCommented = !this.toggleCommented;
    setTimeout(() => {
      this.elRef.nativeElement.querySelector('textarea.mainComment').focus();
    }, 100);
  }
  // like
  likeFun() {
    this.toggleLike = !this.toggleLike;
    if (this.toggleLike === true) {
      this.likeCount = this.likeCount + 1;
      this.liketext = ' Liked';
    } else {
      this.likeCount = this.likeCount - 1;
      this.liketext = ' Like';
    }
  }
  followFun() {
    this.toggleFollowed = !this.toggleFollowed;
    if (this.toggleFollowed === true) {
      this.followtext = ' Followed';
    } else {
      this.followtext = ' Follow';
    }
  }

  // listing like and comment
  likedList() {
  }
  commentedList() {
    this.commentWrapOfst = this.elRef.nativeElement.querySelector('input.for-comment-focus').focus();
  }

}
