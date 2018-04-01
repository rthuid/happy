// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-modal-like',
//   templateUrl: './modal-like.component.html',
//   styleUrls: ['./modal-like.component.scss']
// })
// export class ModalLikeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import {Component, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-like',
  templateUrl: './modal-like.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ModalLikeComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  // openBackDropCustomClass(content) {
  //   this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  // }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  // openVerticallyCentered(content) {
  //   this.modalService.open(content, { centered: true });
  // }

}
