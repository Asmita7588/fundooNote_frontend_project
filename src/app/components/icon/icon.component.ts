import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes/notes.service';
import { LabelService } from 'src/app/services/label.service';
import { CollabService } from 'src/app/services/collab/collab.service';
import { Collaborator } from 'src/app/services/model/defined-dta/defined-dta.module';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  
  constructor(private noteService: NotesService, private router: Router,private dialog: MatDialog, private labelService : LabelService, private collabService : CollabService) {}

  ngOnInit(): void {
    if (!this.isIcon) {
      console.warn('isIcon input is not provided!');
      this.isIcon = {}; 
    }  
   this.getCollaborators();
  
  }

  receivemessageDisplayToGetAllCollab($event:any){
    
  }
    
  noteArray = [];

  @Input() isIcon: any;
  
  @Output() messageToDisplay = new EventEmitter<string>();
  archived : any;
   isDeleted: any;
  isArchived: any;
  id: any;
   color: any;
  date: any;

  ownerEmail = 'girhepunjeasmita25@gmail.com';
  newEmail = '';
  collaborators :string[] = [];
  // collabalotorsById = []
  @Output() messageToGetAllNote = new EventEmitter<string>();
  
  colors: Array<any> = [
    { code: '#fff' },
    { code: 'pink' },
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

  
  updateData(noteId: number, collaborators: any[]) {
    this.collabService.updateCollaborators(noteId, collaborators);
  }

  updateArchiveNote() {
    let data = {
      NoteId: this.isIcon.noteId,
    };
    console.log('archived called');
    this.noteService.updateArchiveNoteService(data).subscribe((data: any) => {
     

      console.log('notes moved to archived', data);
      this.messageToGetAllNote.emit(data);
      
      
    });
  }

  updateColourNote(color:any) {
    let data = {
      NoteId: this.isIcon.noteId,
      Color:color
    };
    console.log('color api called');
    this.noteService.UpdateColorNoteService(data).subscribe((data: any) => {
      console.log('notes color change', data);
      this.messageToDisplay.emit(data);
    });
  }
  

  updateTrashNote() {
    let data = {
      NoteId: this.isIcon.noteId,
    };
    console.log('trash called');
    this.noteService.UpdateTrashNoteService(data).subscribe((data: any) => {
      console.log('notes moved to trash', data);
      
      this.messageToGetAllNote.emit(data);
    });
  }


  deleteForeverNote() {
    let data = {
      NoteId: this.isIcon.noteId,
    };
    console.log('delete api calling');
    this.noteService.deleteNoteService(data).subscribe((data: any) => {
      console.log('notes deleted forever', data);
      this.messageToGetAllNote.emit(data);
    });
  }

  setReminder() {
    const formattedDate = new Date(this.date).toISOString().slice(0, 19);
    console.log(formattedDate);
    const formattedDateWithMillis = formattedDate + '.0000000';
    let data = {
      NoteId: this.isIcon.noteId,
      userId:this.isIcon.userId,
      reminder: formattedDateWithMillis,
      
    };
    this.noteService.remainderService(data).subscribe((res: any) => {
      console.log('calling API ', res);
      this.messageToDisplay.emit(res);
    });
  }

    
    addCollaborator() {
      if (this.newEmail.trim() !== '') {
        this.newEmail = '';
        this.collaborators.push(this.newEmail);
        console.log(this.collaborators)
        
      }
    }
  
    collabalotorsById: { [noteId: number]: any[] } = {};
    getCollaborators() {
      const noteId = this.isIcon.noteId;
    
      this.noteService.getAllCollaborator({ NoteId: noteId }).subscribe(
        (response: any) => {
          
          this.collabService.updateCollaborators(noteId, response);
    
          console.log(`Collaborators for note ${noteId}:`, response);
        },
        (error) => {
          console.error(`Error fetching collaborators for note ${noteId}:`, error);
        }
      );
    }
    

    removeCollaborator(email: string) {
      this.collaborators = this.collaborators.filter(c => c !== email);
    }
  
  
    onSave() {
      const data = {
      NoteId: this.isIcon.noteId,
      email: this.newEmail,
      UserId: this.isIcon.userId
        
      };
    
      this.noteService.saveCollaborator(data).subscribe({
        next: (response: any) => {
          console.log('Collaborator saved:', response);
          this.messageToDisplay.emit(response);
          this.noteService.getAllNote();
          
        },
        error: (error) => {
          console.error('Error saving collaborator:', error);
        }
        
      });
    }



    newLabel: string = '';
labelList: string[] = [];



addLabel() {
  if (this.newLabel.trim()) {
    this.labelService.addLabel(this.newLabel.trim()); 
    this.newLabel = ''; 
  }
}
}
    
    









