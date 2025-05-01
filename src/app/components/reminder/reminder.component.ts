import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit{
  constructor(private noteService:NotesService){}
  ngOnInit(): void {
    this.reminderNoteList()
  }
   @Input() noteArray: any =[];
  
  reminderNoteList() {
    console.log("reminder api sending");
    this.noteService.remainderServiceList().subscribe((reminderResult: any) => {
      console.log("reminder Notes:", reminderResult);
      
      const now = new Date().getTime();
      
      this.noteArray = reminderResult
        .filter((note: any) => {
          const reminderDate = new Date(note.reminder).getTime();
          return reminderDate >= now;
        })
        .reverse();
    }, (error) => {
      console.error('error:', error);
    });
  }
  

}
