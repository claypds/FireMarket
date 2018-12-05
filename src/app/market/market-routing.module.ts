import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { ProductsComponent } from './products/products.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      { path: 'products', component: ProductsComponent },
      { path: 'auth/signup', component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule {}
