import { Component, OnInit } from '@angular/core';
import { CreateNote } from 'src/app/services/model/defined-dta/defined-dta.module';
import { NotesService } from 'src/app/services/notes/notes.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss'],
})
export class GetAllNoteComponent implements OnInit {
  noteArray = [];
  filteredArray = [];
  isIcon: any;
  isGridView = true;
  constructor(
    private noteService: NotesService,
    private searchService: SearchService
  ) {}
  ngOnInit(): void {
    this.getAllNotes();
    this.searchService.searchText$.subscribe((text) => {
      this.filterNotes(text);
    });
  }

  filterNotes(searchText: string) {
    const lowerCaseText = searchText.toLowerCase();

    this.filteredArray = this.noteArray.filter((note: CreateNote) => {
      const title = note.title ? note.title.toLowerCase() : '';
      const description = note.note ? note.note.toLowerCase() : '';
      return (
        title.includes(lowerCaseText) || description.includes(lowerCaseText)
      );
    });
  }

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  getAllNotes() {
    this.noteService.getAllNote().subscribe((response: any) => {
      this.noteArray = response;
      this.noteArray = this.noteArray.filter((result: any) => {
        return result.isTrash == false && result.isArchive == false;
      });
      this.filteredArray = [...this.noteArray];
      this.noteArray.reverse();
      console.log('this is note array', this.noteArray);
    });
  }

  receivemessageDisplayToGetAllNote($event: any) {
    this.getAllNotes();
  }
}
