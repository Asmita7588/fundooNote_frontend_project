import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  constructor(private noteService : NotesService){}

  ngOnInit():void{}

  @Input() isIcon: string = '';
  selectedColor: string = '';

  NoteColorChange(colorCode: string) {
    this.selectedColor = colorCode;
  }

  // @Input() isIcon : any; // child

  @Output() messageToDisplay = new EventEmitter<string>();

  isDeleted : any;
  isArchived : any;
  id: any;
  color : any;

  colors: Array<any> = [
    { code: '#fff' },
    { code: '#f28b82' },
    { code: '#fbbc04' },
    { code: '#FFFF00' },
    { code: '#ccff90' },
    { code: '#a7ffeb' },
    { code: '#cbf0f8' },
    { code: '#aecbfa' },
    { code: '#d7aefb' },
    { code: '#fdcfe8' },
    { code: '#e6c9a8' },
    { code: '#e8eaed' },
  ];

  // NoteColorChange(colour: any) {
  //   console.log(this.isIcon.id);
  //   let data = {
  //     noteIdList: [this.isIcon.id],
  //     color: colour,
  //   };
  //   console.log('getting noteID', data.noteIdList);
  //   this.noteService.updatecolor(data).subscribe((data: any) => {
  //     console.log('calling api', data);
  //     this.messageToDisplay.emit(data);
  //   });
  // }



}
