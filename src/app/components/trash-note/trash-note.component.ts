import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
 ngOnInit(): void {
    this.listOfTrashNotes();
  }
  constructor(private noteService : NotesService){}
  @Input() noteArray : any =[];
  

  listOfTrashNotes(){
    console.log("archive api sending");
    this.noteService.archiveNoteService().subscribe((archiveResult: any) => {
      console.log("archived Notes :", archiveResult);
      this.noteArray = archiveResult.filter((note: any) => note.isTrash === true);
       
    });
    this.noteArray.reverse();
    
  }

  receivemessageDisplayToGetTrashList($event :any){
    this.listOfTrashNotes();
  }
}
