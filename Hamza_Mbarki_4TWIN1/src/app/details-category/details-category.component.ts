import { Component, Input } from '@angular/core';
import { Categorie } from '../models/categories';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent {
  @Input() category!: Categorie; // Propriété d'entrée pour recevoir les données
}
