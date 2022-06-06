import { Component, OnInit } from '@angular/core';
import { PeopleServiceService } from '../service/people-service.service';

@Component({
  selector: 'spa-modulo-service',
  templateUrl: './modulo-service.component.html',
  styleUrls: ['./modulo-service.component.css'],
})
export class ModuloServiceComponent implements OnInit {
  count = 0;
  nome = 'Caio Prado de Arrida Campos Nunes';
  text = '';
  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 45,
    },
  ];

  constructor(private peopleService: PeopleServiceService) {}

  ngOnInit() {
    console.log(this.pessoas);
    this.getPeople();
    let interval = setInterval(() => {
      if (this.count === 20) {
        clearInterval(interval);
      }
      this.count++;
    }, 1000);
  }

  clicou() {
    console.log('foi');
  }

  getPeople() {
    this.peopleService.getPeople().subscribe((people) => {
      this.pessoas = people;
    });
  }
}
