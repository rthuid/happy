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
  likesWrap  = false;
  followtext = ' Follow';
  forFocus = 0;
  wrap = document.getElementsByTagName('ngb-modal-window');
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
    this.likesWrap = !this.likesWrap;
    this.forFocus = this.elRef.nativeElement.querySelector('div.like-wrap').offsetTop;
    this.wrap[0].scrollTop = this.forFocus;
  }
  commentedList() {
    this.forFocus = this.elRef.nativeElement.querySelector('div.comment-wrap').offsetTop;
    this.wrap[0].scrollTop = this.forFocus;
  }

}
