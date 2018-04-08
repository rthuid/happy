import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liked-list',
  templateUrl: './liked-list.component.html',
  styleUrls: ['./liked-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LikedListComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

}
