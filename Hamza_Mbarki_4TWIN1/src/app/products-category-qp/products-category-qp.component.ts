import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category-qp',
  templateUrl: './products-category-qp.component.html',
  styleUrls: ['./products-category-qp.component.css']
})
export class ProductsCategoryQPComponent implements OnInit {
  categoryId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID depuis les query params
    this.route.queryParamMap.subscribe(params => {
      this.categoryId = params.get('id');
      console.log('Category ID:', this.categoryId);
    });
  }
}
