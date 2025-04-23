import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllNoteComponent } from './get-all-note.component';

describe('GetAllNoteComponent', () => {
  let component: GetAllNoteComponent;
  let fixture: ComponentFixture<GetAllNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllNoteComponent]
    });
    fixture = TestBed.createComponent(GetAllNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
