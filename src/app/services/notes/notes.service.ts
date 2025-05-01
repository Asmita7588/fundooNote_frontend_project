import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
 url= "/api/notes/archiveNote";
 trashUrl ="/api/notes/trashNote";
 deleteUrl= "/api/notes/deleteNote";
 updateNoteUrl = "/api/notes/updateNote";
 colorUrl = "/api/notes/addColorNote";
 remainderUrl="/api/notes/remainderNote";
 collaboratorUrl="/api/notes/addCollaborator"
 collabUrl = "/api/notes/getCollaboratores";
 deleteCollab = "/api/notes/deleteCollborator";
 token : any;
  constructor(private httpService : HttpService) 
  {
    this.token = localStorage.getItem('authToken');
   }

   createNote(data :any){
    this.token = localStorage.getItem('authToken');
    console.log(this.token);
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.httpService.postApi(
      '/api/notes/createNote',
      data,
      httpOption.headers 
    );

  
   }
   getAllNote() {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.httpService.getApi('/api/notes/getAllNotes' ,httpOption.headers  
    );
  }

  getAllCollaborator(data:any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.httpService.getApi((`${this.collabUrl}?NoteId=${data.NoteId}`) ,httpOption.headers  
    );
  }

  

  archiveNoteService(){
    console.log("Token :" +this.token );
    let httpOption = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        Authorization :`Bearer ${this.token}`,
      }),
    };
    return this.httpService.getApi('/api/notes/getAllNotes', httpOption.headers);
  }

  trashNoteService(){
    console.log("Token :" +this.token );
    let httpOption = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        Authorization :`Bearer ${this.token}`,
      }),
    };
    return this.httpService.getApi('/api/notes/getAllNotes', httpOption.headers);
  }
  UpdateTrashNoteService(data :any){
    let httpOption ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        Authorization: `Bearer ${this.token}`,

      })
    }
    return this.httpService.putApi(
      (`${this.trashUrl}?NoteId=${data.NoteId}`),
      data,
      httpOption.headers
    )
  }
  UpdateColorNoteService(data :any){
    let httpOption ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        Authorization: `Bearer ${this.token}`,

      })
    }
    return this.httpService.putApi(
      (`${this.colorUrl}?NoteId=${data.NoteId}`),
      data,
      httpOption.headers
    )
  }

  updateArchiveNoteService(data :any){
    let httpOption ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        Authorization: `Bearer ${this.token}`,

      })
    }
    return this.httpService.putApi(
      (`${this.url}?NoteId=${data.NoteId}`),
      data,
      httpOption.headers
    )
  }
  
   updatecolor(data:any){
    let httpOption ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        Authorization: `Bearer ${this.token}`,

      })
    }
    return this.httpService.putApi(
      (`${this.colorUrl}?NoteId=${data.NoteId}&Color=${data.Color}`),
      data,
      httpOption.headers
    );
  }

  deleteNoteService(data:any){
    let httpOption ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        Authorization: `Bearer ${this.token}`,

      })
    }
    return this.httpService.deleteApi(
      (`${this.deleteUrl}?NoteId=${data.NoteId}`),
      data,
      httpOption.headers
    )
  }

  updateNote(data:any){
    let httpOption ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        Authorization: `Bearer ${this.token}`,
      })
    }
    return this.httpService.putApi(
      (`${this.updateNoteUrl}?NoteId=${data.NoteId}`),
      data,
      httpOption.headers
    )

  }

  remainderService(data: any) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        Authorization: `Bearer ${this.token}`,
        
      }),
    };
    return this.httpService.putApi(
      // (`${this.remainderUrl}?NoteId=${data.NoteId}`),
      (`${this.remainderUrl}?NoteId=${data.NoteId}&userId=${data.userId}&reminder=${data.reminder}`),
      data,
      httpOption.headers
    );

    
  }

  remainderServiceList() {
  let httpOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };
  return this.httpService.getApi('/api/notes/getAllNotes' ,httpOption.headers  
  );
  }

  saveCollaborator(data: any){

    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.httpService.putApi(
      (`${this.collaboratorUrl}?NoteId=${data.NoteId}&Email=${data.email}&UserId=${data.UserId}`),
      data,
      httpOption.headers
    )

    }


    removeCollaborator(data:any){
      let httpOption = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }),
      };
      return this.httpService.deleteApi(
        (`${this.deleteCollab}?CollboratorId=${data.CollaboratorId}`),
        data,
        httpOption.headers
      )

    }

  }
  




