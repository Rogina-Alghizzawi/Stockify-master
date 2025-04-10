import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateManagerComponent } from './create-manager/create-manager.component';

const routes: Routes = [
  {
    path: 'createManager', component: CreateManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
