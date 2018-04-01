import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLikeComponent } from './modal-like.component';

describe('ModalLikeComponent', () => {
  let component: ModalLikeComponent;
  let fixture: ComponentFixture<ModalLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
