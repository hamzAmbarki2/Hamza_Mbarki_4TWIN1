import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        this.product=this.route.snapshot.params['id'];
      })    }


}
