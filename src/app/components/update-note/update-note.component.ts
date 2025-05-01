import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent {

  title: any;
  noteId: any;
  userId: any;
  description: any;
  Id: any;
  reminder :any;
  image:any
  isArchive: any;
  isPin: any;
  isTrash:any;
  createdAt :any;
  updatedAt:any;
 
  color:any
  @Output() messageUpdateToDisplay = new EventEmitter<string>();
  @Output() emitcolour = new EventEmitter<string>();

  constructor(
    private noteService: NotesService,
    public dailogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    if (data) {
      this.noteId =this.data.noteId;
      this.title= this.data.title,
      this.description= this.data.description,
      this.reminder = this.data.reminder,
      this.color= this.data.color,
      this. image= '',
      this. isArchive= this.data.isArchive,
      this.isPin= this.data.isPin,
      this.isTrash= this.data.isTrash,
      this.createdAt= this.data.createdAt,
      this.updatedAt= this.data.updatedAt
      this.userId = this.data.UserId;
    };
  }

  updateNote() {
    let data = {
      NoteId: this.noteId,
      title: this.title,
      description: this.description,
      reminder: new Date().toISOString(),
      color: this.color,
      image: '',
      isArchive: false,
      isPin: false,
      isTrash: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      UserId: this.userId
    };
  
    this.noteService.updateNote(data).subscribe((result: any) => {
      this.dailogRef.close('updated');
      this.messageUpdateToDisplay.emit(result);
      
    }
    
  );
  
    this.dailogRef.close();
  }
  


  receivemessageUpdateToDisplay($event:any){
    
    this.updateNote()
  }


}
