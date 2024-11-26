import { Component } from '@angular/core';
import { Categorie } from '../models/categories';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  // Propriété de recherche pour le titre
  titre: string = '';

  // Liste des catégories
  categories: Categorie[] = [
    {
      id: 1,
      title: 'Grand électroménager',
      image: 'assets/images/categorie_electromenager.jpg',
      description: 'Des appareils de grande taille pour la maison.',
      available: true,
    },
    {
      id: 2,
      title: 'Petit électroménager',
      image: 'assets/images/categorie_petit_electromenager.jpg',
      description: 'Des appareils électroménagers compacts.',
      available: true,
    },
    {
      id: 3,
      title: 'Produits informatiques',
      image: 'assets/images/categorie_produits_informatiques.jpg',
      description: 'Ordinateurs, imprimantes et autres équipements.',
      available: true,
    },
    {
      id: 4,
      title: 'Smart Phones',
      image: 'assets/images/categorie_smartPhone.jpg',
      description: 'Les derniers modèles de smartphones.',
      available: true,
    },
    {
      id: 5,
      title: 'TV, images et son',
      image: 'assets/images/categorie_tv_image_son.jpg',
      description: 'Téléviseurs et équipements audio.',
      available: true,
    },
    {
      id: 6,
      title: 'Produits voiture',
      image: 'assets/images/produits_nettoyages.jpg',
      description: 'Produits pour entretenir votre voiture.',
      available: false,
    },
  ];

  // Méthode pour afficher une description dans une alerte
  getDescription(description: string): void {
    alert(description);
  }
}
