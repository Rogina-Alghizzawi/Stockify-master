import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryAnalyticsComponent } from './inventory-analytics/inventory-analytics.component';

const routes: Routes = [


    {
          path:"InventoryAnalytics" ,component: InventoryAnalyticsComponent
        },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
