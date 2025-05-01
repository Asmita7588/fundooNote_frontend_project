import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {

  constructor() { }

  private viewMode = new BehaviorSubject<boolean>(true); // true = Grid, false = List

  viewMode$ = this.viewMode.asObservable();

  toggleView() {
    this.viewMode.next(!this.viewMode.value);
  }

  setView(isGrid: boolean) {
    this.viewMode.next(isGrid);
  }
}
