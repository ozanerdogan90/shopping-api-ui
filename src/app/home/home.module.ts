import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShoppingStore } from './state/shopping/shopping.store';
import { ShoppingService } from './state/shopping/shopping.service';
import { ShoppingQuery } from './state/shopping/shopping.query';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { CartComponent } from './cart/cart.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export const COMPONENTS = [HomeComponent, NavBarComponent, BannerComponent, CartComponent, ContactDetailsComponent];

@NgModule({
    imports: [CommonModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class HomeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RootHomeModule,
            providers: [
                ShoppingService,
                ShoppingQuery,
                ShoppingStore,
            ]
        };
    }
}

@NgModule({
    imports: [HomeModule, HomeRoutingModule]
})
export class RootHomeModule { }
