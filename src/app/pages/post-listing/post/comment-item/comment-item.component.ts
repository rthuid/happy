import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  toggleRplay = false;
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }
  // toggleCommented
  toggleRplyComment() {
    this.toggleRplay = !this.toggleRplay;
    setTimeout(() => {
      this.elRef.nativeElement.querySelector('textarea').focus();
    }, 100);
  }

}
