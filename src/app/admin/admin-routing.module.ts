import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffApprovalComponent } from './staff-approval/staff-approval.component';

const routes: Routes = [

    {
      path:'staffaproval',
      component: StaffApprovalComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
