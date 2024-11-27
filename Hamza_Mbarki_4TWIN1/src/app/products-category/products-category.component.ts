import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  categoryId:any;
  filteredProducts: Product[] = [];

  listProducts: Product[] = [
    { id: 1, name: 'Refrigérateur LG Inox', image: 'assets/images/refrigerateur-lg.jpeg', categoryId: 1, description: '', price: 2800, brand: 'LG', promotion: 0 },
    { id: 2, name: 'Refrigérateur Samsung Blanc', image: 'assets/images/refrigerateur_samsung.png', categoryId: 1, description: '', price: 2400, brand: 'Samsung', promotion: 0 },
    { id: 3, name: 'Lave vaisselle Beko', image: 'assets/images/lave_vaisselle.jpeg', categoryId: 1, description: '', price: 1875, brand: 'BEKO', promotion: 0 },
    { id: 4, name: 'Oppo Smart Phone', image: 'assets/images/oppo_smart.jpeg', categoryId: 4, description: '', price: 1200, brand: 'OPPO', promotion: 0 },
    { id: 5, name: 'Hachoir', image: 'assets/images/hachoir.jpeg', categoryId: 2, description: '', price: 120, brand: 'Moulinex', promotion: 0 },
    { id: 6, name: 'TV 50\' LG', image: 'assets/images/tv_lg.jpg', categoryId: 5, description: '', price: 1800, brand: 'LG', promotion: 0 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID de la catégorie depuis l'URL
    this.categoryId = this.route.snapshot.paramMap.get('id');

    if (this.categoryId ) {
      // Convertir l'ID en nombre pour la comparaison
      const categoryIdNumber = parseInt(this.categoryId, 10);

      // Filtrer les produits par categoryId
      this.filteredProducts = this.listProducts.filter(product => product.categoryId === categoryIdNumber);
    }

    // Affichage pour débogage
    console.log('Produits filtrés:', this.filteredProducts);
  }
}
