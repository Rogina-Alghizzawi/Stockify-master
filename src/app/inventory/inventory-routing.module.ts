import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';

const routes: Routes = [
  {
    path : 'Map',
    component: MapComponent
  },
  { path: 'createInventory', component: CreateInventoryComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
