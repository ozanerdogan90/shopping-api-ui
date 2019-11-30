import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShoppingStore } from './state/shopping.store';
import { ShoppingService } from './state/shopping.service';
import { ShoppingQuery } from './state/shopping.query';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const COMPONENTS = [HomeComponent, NavBarComponent];

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
