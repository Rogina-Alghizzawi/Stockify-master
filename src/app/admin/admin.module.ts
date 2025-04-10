import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StaffApprovalComponent } from './staff-approval/staff-approval.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    StaffApprovalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    SharedModule
],
  exports: [
    StaffApprovalComponent
  ],
})
export class AdminModule { }
