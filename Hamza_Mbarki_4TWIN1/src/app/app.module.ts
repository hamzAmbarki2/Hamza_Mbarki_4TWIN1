import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AproposComponent } from './apropos/apropos.component';
import { HeaderComponent } from './header/header.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ProductModule } from './product/product.module';
import { ContactModule } from './contact/contact.module';
import { ProfileModule } from './profile/profile.module';
import { AproposModule } from './apropos/apropos.module';
import {FormsModule} from "@angular/forms";
import { HighlightDirective } from './highlight.directive';
import { ContainsPipe } from './contains.pipe';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Route vers HomeComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection automatique
  { path: '**', component: NotFoundPageComponent }, // Route pour les paths non définis
  { path: 'product/:id', component: ProductsCategoryComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    AproposComponent,
    HeaderComponent,
    ListCategoriesComponent,
    HighlightDirective,
    ContainsPipe,
    NotFoundPageComponent,
    ProductsCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    ContactModule,
    ProfileModule,
    AproposModule,
    RouterModule.forRoot(routes) // Configuration directe des routes


  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
