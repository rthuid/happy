import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  closeResult: string;
  toggleCommented = false;
  likeCount = 12;
  toggleLike = false;
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
  // toggleCommented
  toggleRplyComment() {
    setTimeout(() => {
      this.elRef.nativeElement.parent('.item-wrap').find('textarea').focus();
      console.log(this.elRef.nativeElement.parent('.item-wrap').find('textarea'));
    }, 100);
  }
  // like
  likeFun() {
    this.toggleLike = !this.toggleLike;
    if (this.toggleLike === true) {
      this.likeCount = this.likeCount + 1;
    } else {
      this.likeCount = this.likeCount - 1;
    }
  }

  // modals
  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
