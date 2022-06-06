import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PeopleServiceService {
  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Karl ',
        lastName: 'marx ',
        age: 45,
      },
      {
        firstName: 'Adam ',
        lastName: 'Smith',
        age: 47,
      },
      {
        firstName: 'Jaques ',
        lastName: 'Rosseau',
        age: 35,
      },
      {
        firstName: 'Simone ',
        lastName: 'De Beauvoir',
        age: 65,
      },
    ];
    return of(peopleArray);
  }
  constructor() {}
}
