import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth-guard.service';
import { CartComponent } from './home/cart/cart.component';
import { ContactDetailsComponent } from './home/contact-details/contact-details.component';
import { ProductsComponent } from './home/product/products.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'contact',
        component: ContactDetailsComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      }]
  },
  { path: '**', redirectTo: '/home/products' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
