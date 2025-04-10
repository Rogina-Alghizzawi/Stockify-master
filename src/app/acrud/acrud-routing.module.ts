import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrateadminComponent } from './crateadmin/crateadmin.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

      {
        path:"createAdmin" ,component: CrateadminComponent
      },
      {
        path:"Delete" ,component: DeleteComponent
      }
      , {
        path:"Update" ,component: UpdateComponent
       } , {
        path:"View" ,component: ViewComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcrudRoutingModule { }
