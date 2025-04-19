
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpService) {}

  register(payload: any) {
    return this.http.postApi('/register', payload);
  }

  signIn(payload: any) {
    return this.http.postApi('/login', payload)
  }
}
