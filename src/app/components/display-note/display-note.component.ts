import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { ViewServiceService } from 'src/app/services/view/view-service.service';
import { CollabService } from 'src/app/services/collab/collab.service';
import { NotesService } from 'src/app/services/notes/notes.service';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss'],
})
export class DisplayNoteComponent  implements OnInit{
  @Input() childArray: any;
  @Input() filteredArray : any;

//  collabalotorArray: any[] = [];
collaboratorsByNoteId: { [noteId: number]: any[] } = {};
  @Output() messageDisplayToGetAllNote = new EventEmitter<string>();
  @Output() messageToDisplay = new EventEmitter<string>();
  @Output()  messageToserach = new EventEmitter<string>();

  @Input() isGridView: boolean = true;

  ngOnInit(): void {
  

   this.viewToggleService.viewMode$.subscribe((mode) => {
    this.isGridView = mode;

   
  });

  this.collabService.collaboratorsMap$.subscribe((data) => {
    this.collaboratorsByNoteId = data;
  });
}
  

  constructor(public dialog : MatDialog, private viewToggleService: ViewServiceService, private collabService : CollabService, private noteService : NotesService) {}
  receivemessageToDisplay($event: any) {
    console.log('event from icon to diplay ', $event);
    
    this.messageDisplayToGetAllNote.emit($event)

    
  }

  updateNote(noteupdate:any){
    console.log('calling the update')
    let dailogRef = this.dialog.open(UpdateNoteComponent,{
      data:noteupdate,
    })

    dailogRef.afterClosed().subscribe((result :any)=>{
      console.log('Dialog closed', result)
      this.messageToDisplay.emit(result);
      
    } )
    
  }

  removeCollaborator(noteId: number, collaboratorId: number) {
    const data = {
      CollaboratorId: collaboratorId
    };
    
  
    this.noteService.removeCollaborator(data).subscribe(
      () => {
        const currentList = this.collaboratorsByNoteId[noteId] || [];
        const updatedList = currentList.filter(c => c.collaboratorId !== collaboratorId);
        this.collabService.updateCollaborators(noteId, updatedList);
        console.log(`Removed collaborator with ID ${collaboratorId} from note ${noteId}`);
      },
      (error) => {
        console.error(`Error removing collaborator with ID ${collaboratorId}:`, error);
      }
    );
  }
  
  
  

  
}
