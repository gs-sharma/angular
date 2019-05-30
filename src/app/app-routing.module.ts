import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path: 'login', component: LoginComponent},
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'my-orders', component: MyOrdersComponent , },
      {path: 'order-success', component: OrderSuccessComponent , },
      {path: 'check-out', component: CheckOutComponent , },
      {path: 'admin-order', component: AdminOrderComponent , },
      {path: 'admin-products', component: AdminProductsComponent , },


    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
