import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/74cdd41d-0f8b-4352-a4d9-8ec6644a6ec1';
  constructor(private httpClient: HttpClient) {}
  //retornar a lista de usuários READ

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL);
  }
}
