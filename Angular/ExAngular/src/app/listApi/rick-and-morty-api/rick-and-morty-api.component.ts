import { Component, OnInit } from '@angular/core';
import { ListRickyAndMortyService } from 'src/app/service/list-ricky-and-morty.service';

@Component({
  selector: 'spa-rick-and-morty-api',
  templateUrl: './rick-and-morty-api.component.html',
  styleUrls: ['./rick-and-morty-api.component.css'],
})
export class RickAndMortyApiComponent implements OnInit {
  personagens: Array<any> = [];

  constructor(private listRickyAndMortyService: ListRickyAndMortyService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.listRickyAndMortyService.getList().subscribe((result) => {
      this.personagens = result.results;
      console.log(this.personagens);
    });
  }
}
