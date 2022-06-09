import { Component, OnInit } from '@angular/core';
import { ProductionListService } from './production-list.service';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css'],
})
export class ProductionListComponent implements OnInit {
  items: any;
  productionListService: ProductionListService;

  constructor(productionListService: ProductionListService) {
    this.productionListService = productionListService;
  }

  ngOnInit(): void {
    this.items = this.productionListService.getBook().subscribe((data) => {
      this.items = data;
      console.log(this.items);
    });
  }
}
