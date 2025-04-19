
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  BASE_URL: string = 'https://localhost:44326';

  getHeader() {
    const header = new HttpHeaders({
      Authorization: localStorage.getItem('authToken') || '',
    });
    return header;
  }
  getApi(endpoint: string, headers: HttpHeaders = new HttpHeaders()) {
    return this.http.get(this.BASE_URL + endpoint, { headers });
  }

  postApi(endpoint: string, payload: any, headers: HttpHeaders = new HttpHeaders()) {
    return this.http.post(this.BASE_URL + endpoint, payload, { headers });
  }

  deleteApi(endpoint: string, payload: any, headers: HttpHeaders = new HttpHeaders() ) {
    return this.http.delete(this.BASE_URL + endpoint, payload);
  }

  putApi(endpoint: string, payload: any, headers : HttpHeaders = new HttpHeaders()){
    return this.http.post(this.BASE_URL +endpoint,payload);
  }
  
}
