import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const ROUTES: Routes = [
  {path: '', component: ProductCatalogComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
