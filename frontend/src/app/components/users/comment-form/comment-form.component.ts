import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IComment } from '../../../model/comment-model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
  @Output() commentEvent = new EventEmitter<IComment>();

  onSumbit(form: NgForm) {
    this.commentEvent.emit(form.value);
  }
}
