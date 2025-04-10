import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InventoryAnalyticsComponent } from './inventory-analytics/inventory-analytics.component';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InventoryAnalyticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    SharedModule
  ]
})
export class DashboardModule { }
