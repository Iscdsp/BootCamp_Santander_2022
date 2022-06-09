import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root',
})
export class ProductionListService {
  private url =
    'https://sheet.best/api/sheets/74cdd41d-0f8b-4352-a4d9-8ec6644a6ec1';

  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(this.url);
  }
}
