import { Component, Input } from '@angular/core';
import { IComment } from '../../../model/comment-model';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrl: './user-comment.component.css',
})
export class UserCommentComponent {
  @Input() comments!: Array<IComment>;

  tab = 0;
}
