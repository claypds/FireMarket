import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { MaterialModule } from './material/material.module';

import { MarketRoutingModule } from './market-routing.module';

import { LayoutComponent } from './layout/layout.component';

import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [LayoutComponent, ProductsComponent, SignUpComponent],
  imports: [
    SharedModule,
    MaterialModule,
    MarketRoutingModule
  ]
})
export class MarketModule {}
