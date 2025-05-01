import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';
// import { IconComponent } from './components/icon/icon.component';


@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {
  ngOnInit(): void {
    this.listOfArchiveNotes();
  }
  constructor(private noteService : NotesService){}

  @Input() noteArray : any =[];
 
  listOfArchiveNotes(){
    console.log("archive api sending");
    this.noteService.archiveNoteService().subscribe((archiveResult: any) => {
      console.log("archived Notes :", archiveResult);
      this.noteArray = archiveResult.filter((note: any) => note.isArchive === true);
       this.noteArray.reverse();
       
    });
    
  }

  receivemessageDisplayToGetArchiveList($event : any){
    this.listOfArchiveNotes();
  }

}
