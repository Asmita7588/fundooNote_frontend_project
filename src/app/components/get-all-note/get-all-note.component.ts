import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent {

  noteArray = [];

  constructor(private noteService:NotesService ) {}
  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.noteService.getAllNote().subscribe((response: any) => {
      console.log(response),
        // console.log(response),
        (this.noteArray = response);
      // this.noteArray = this.noteArray.filter((result: any) => {
      //   return result.isDeleted == false && result.isArchived == false;
      // });
      // this.noteArray.reverse();
      console.log('this is note array', this.noteArray);
    });
  }
  
  receivemessageDisplayToGetAllNote($event:any){
    this.getAllNotes()
  }

}
