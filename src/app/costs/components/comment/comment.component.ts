import {Component, Input} from '@angular/core';
import {Comments} from "../../../models";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: Comments;
}
