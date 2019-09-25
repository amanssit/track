import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: any;
  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/todos';
  }

  getData(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
