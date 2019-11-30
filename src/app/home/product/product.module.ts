import { CargoOptionsComponent } from './cargo-options/cargo-options.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReviewComponent } from './review/review.component';
import { SellerFilterComponent } from './seller-filter/seller-filter.component';
import { ProductsComponent } from './products.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductQuery } from './state/product.query';
import { ProductStore } from './state/product.store';
import { ProductService } from './state/product.service';
import { NgModule } from '@angular/core';

export const COMPONENTS = [CargoOptionsComponent, CategoriesComponent, ProductCardComponent,
    ReviewComponent, SellerFilterComponent, ProductsComponent]
@NgModule({
    imports: [CommonModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule],
    providers: [ProductQuery, ProductStore, ProductService],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ProductModule {
}
