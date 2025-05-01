import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor() { }

  private labelsSource = new BehaviorSubject<string[]>([]); 
  labels$ = this.labelsSource.asObservable();  

  addLabel(newLabel: string) {
    const currentLabels = this.labelsSource.value;
    this.labelsSource.next([...currentLabels, newLabel]);
   }

}
