import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductComponent},
  {path: 'cart', component: CartComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
