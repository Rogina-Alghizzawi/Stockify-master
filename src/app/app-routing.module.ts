import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';
import { ReorderModule } from './reorder/reorder.module';
import { AcrudModule } from './acrud/acrud.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StockModule } from './stock/stock.module';
import { InventoryModule } from './inventory/inventory.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> AuthModule
  },
  {
    path: 'admin',
    loadChildren: ()=> AdminModule
  },
  {
    path: 'manager',
    loadChildren: ()=> ManagerModule
  },
  {
    path: 'reorder',
    loadChildren: ()=> ReorderModule
  },
  {
    path: 'Dashboard',
    loadChildren: ()=>  DashboardModule
  },
  {
    path: 'acrud',
    loadChildren: ()=> AcrudModule
  },
  {
    path: 'reorder',
    loadChildren: ()=> ReorderModule
  },
  {
    path: 'stock',
    loadChildren: ()=> StockModule
  },
  {
    path : 'inventory',
    loadChildren:()=> InventoryModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
