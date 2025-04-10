import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReorderPageComponent } from './reorder-page/reorder-page.component';

const routes: Routes = [
  {
    path:'reorderPage',
    component: ReorderPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReorderRoutingModule { }
