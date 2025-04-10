import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms'; // ✅ Add this
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { share } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  
  declarations: [
    MapComponent,
    CreateInventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    GoogleMapsModule,  
       CommonModule,
       FormsModule ,
      SharedModule,
  ]
})
export class InventoryModule { }
