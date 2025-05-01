import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  constructor() { }

  private collaboratorsMapSource = new BehaviorSubject<{ [noteId: number]: any[] }>({});
  collaboratorsMap$ = this.collaboratorsMapSource.asObservable();

  updateCollaborators(noteId: number, collaborators: any[]) {
    const current = this.collaboratorsMapSource.value;
    const updated = { ...current, [noteId]: collaborators };
    this.collaboratorsMapSource.next(updated);
  }
  

}
