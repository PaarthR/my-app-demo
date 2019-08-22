import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customers',
    // loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
        loadChildren: './customers/customers.module#CustomersModule',

  },
  {
    path: 'orders',
    // loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
    loadChildren: './orders/orders.module#OrdersModule',

  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
