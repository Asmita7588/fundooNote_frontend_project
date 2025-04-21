import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
 token : any;
  constructor(private httpService : HttpService) 
  {
    this.token = localStorage.getItem('authToken');
   }

   createNote(data :any){
    this.token = localStorage.getItem('authToken');
    console.log(this.token);
    let http = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.postApi(
      '/api/notes/createNote',
      data
    );
   }

}
