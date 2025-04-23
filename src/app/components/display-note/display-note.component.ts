import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss'],
})
export class DisplayNoteComponent {
  @Input() childArray: any;
  @Output() messageDisplayToGetAllNote = new EventEmitter<string>();

  ngOnInit(): void {}

  constructor() {}
  receivemessageToDisplay($event: any) {
    console.log('event from icon to diplay ', $event);
    // this.msg= $event;
    // console.log('msg', )

    this.messageDisplayToGetAllNote.emit($event);
  }
}
